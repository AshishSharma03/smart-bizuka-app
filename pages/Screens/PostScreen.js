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
  Alert,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import { Stack } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const SelectCrop = ["Potato", "Rice", "Mango"];





function PostsScreen({PostData}) {
  const [Plants, setPlants] = useState("Potato");
  const [image, setImage] = useState("");
  const [imagePost, setImagePost] = useState(false);
  const imageRef = React.useRef(null);
  const [Uploaded,setUploaded] = useState(false)
  const [snackbarV,setsnackbarV] = useState(false)

  
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
        // console.log(image_)
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
              diseaseType:"Potato Late Blight"
            })
          })

          if(res.status === 200){
            setImagePost(false)
            setsnackbarV(true)
            setUploaded(true)
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
    
        <Snackbar onClick={()=>{setsnackbarV(false)}}  open={snackbarV} sx={{minHeight:"50vh"}} anchorOrigin={{ vertical :"top" , horizontal :"center" }}>
      <Alert>Image Post successfuly</Alert>
      </Snackbar>
      
      <Stack direction={"column"} gap={2}>
        <Box>
          <Stack direction={"row"} gap={2}>
            <FormControl sx={{ width: "100%", color: "black" }}>
              <InputLabel  labelid="demo-simple-select-helper-label">
                Plants
              </InputLabel>
              <Select
                labelid="demo-simple-select-helper-label"
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
          
      </Stack>
         {(Uploaded)?
        <Box onClick={()=>{setUploaded(false)}} sx={{display:'flex',justifyContent:"center",alignItems:"center",minHeight:"20vh"}}>
          <Alert  color="error">
            <Typography>DETECTED :</Typography>
            Potato Late Blight
          </Alert>
       </Box>
       :""
      }
      
    </Box>
  );
}

export default PostsScreen;
