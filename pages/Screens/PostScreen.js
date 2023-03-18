import {
  Box,
  Select,
  Option,
  MenuItem,
  Button,
  Grid,
  Typography,
  Chip,
  FormControl,
  InputLabel,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Stack } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const SelectCrop = ["Apple", "Rice", "Mango"];


const Postdata = ({ label, data, color }) => {
  return (
    <Stack gap={1} direction="row">
      <Typography sx={{ fontWeight: 800 }}>{label} : </Typography>
      <Typography sx={{ color: color }}>{data}</Typography>
    </Stack>
  );
};

const Posts = ({
  croptype,
  diseasefound,
  createdAt,
  images,
  updatedAt,
  id,
}) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0px 0px 100px 5px rgba(0,0,0,0.2)",
      }}
    >
      
      <Box>
        <Postdata label={"Date"} data={""} />
        <Postdata
          label={"Disease Detected"}
          data={diseasefound ? "true" : "false"}
          color={diseasefound ? "red" : "green"}
        />
        <Postdata label={"Crop Type"} data={croptype} />
      </Box>
      <span style={{ flexGrow: 1 }} />
      {images?
      <Image src={images}  width={100} style={{borderRadius:'10px'}} alt="qwpq" height={100}/>
      :""
      }
    </Box>
  );
};

const HeaderBoxBody = ({ title, children }) => {
  return (
    <Stack gap={1}>
      <Box sx={{ padding: "10px", borderRadius: "20px" }}>
        <Stack>{title}</Stack>
      </Box>
      <Box>{children}</Box>
    </Stack>
  );
};


function PostsScreen({PostData}) {
  const [Plants, setPlants] = useState("Apple");
  const [image, setImage] = useState("");
  const [imagePost, setImagePost] = useState(false);
  const imageRef = React.useRef(null);
  

  
  function useDisplayImage() {
    const [result, setResult] = useState();
    
    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }
    return { result, uploader, setResult };
  }
  const { result, uploader,setResult } = useDisplayImage();

  const PostImage = async(image_)=>{
        // console.log(image_)
        setImagePost(true)
        console.log(image_)
        if(image_){
          try{
            const res = await fetch( '/api/CropPost',{
            method:'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
              image : image_,
              diseasefound : true,
              planttype : Plants, 
              diseaseType:"Apple Scrub"
            })
          })

          if(res.status === 200){
            setImagePost(false)
          } 
          console.log(res.status === 200)

        }catch(err){
          console.log(err)
          setImagePost(false)
        }
      }else{
        setImagePost(false)
      }
  }




  const oncloseImage =()=>{
    setResult(undefined ) 
    setImagePost(false)
  }

  return (
    <Box>
      <Stack direction={"column"} gap={2}>
        <Box>
          <Stack direction={"row"} gap={2}>
            <FormControl sx={{ width: "100%", color: "black" }}>
              <InputLabel labelId="demo-simple-select-helper-label">
                Plants
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                label="Age"
                value={Plants}
                onChange={(e) => {
                  setPlants(e.target.value);
                }}
              >
                {SelectCrop?.map((a, i) => (
                  <MenuItem value={a} key={i}>
                    {a}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Box
          sx={{
            position:"relative",
            height: "200px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {result ? (
            <img
              ref={imageRef}
              src={result}
              alt=""
              width={"fit-content "}
              height="200px"
              />
        
          ) : (
            
            <Button
            variant="contained"
            component="label"
            sx={{
              height:"200px",
              width:"100%",
              background: "#fff",
              boxShadow:"none",
              color: "#000000",
              '&:hover':{
                background:"none",
                boxShadow:"none",
              },
              
            }}
          >
            <Stack direction="row" gap={1}>
            <AddAPhotoIcon sx={{color:"#ccc"}}/>
           <Typography sx={{
            fontWeight:"700",
            fontSize:"16px",
              color:"#ccc"}}>Tap To Add Image</Typography>
            </Stack>
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
                uploader(e);
              }}
            />
          </Button>
          )}
          {
            (result)?
            <IconButton color="error" sx={{position:"absolute",top:"0px",right:"0px",border:"1px solid #F7788A"}} onClick={oncloseImage}>
                <CloseIcon htmlColor="#F7788A"/>
              </IconButton>
              :""
            }
        </Box>
        {/* // use OnClick POst */}
        <Button   sx={{padding:"10px",color:"green",background:(imagePost)?"#ccc":"#DDEBDB",border:(imagePost)?"gray":"2px solid green"}} disabled={imagePost} onClick = { ()=>{ PostImage(result)}}>
         {
          (imagePost)?
          <CircularProgress
          size={"20px"}
          />
         :
          "POST"
         }
          </Button>
        <HeaderBoxBody title={"Past Sent Images"}>
          <Stack gap={1}>
            {PostData?.reverse().map((a) => {
              return (
                <Posts
                  croptype={a.planttype}
                  diseasefound={a.diseasefound}
                  diseasetype={a.diseasetype}
                  images={a.image}
                  createdAt={a.createdAt}
                  updatedAt={a.updatedAt}
                  id={a._id}
                  key={a._id}
                />
              );
            })}
          </Stack>
        </HeaderBoxBody>
      </Stack>
    </Box>
  );
}

export default PostsScreen;
