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
} from "@mui/material";
import { Stack } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <Postdata label={"Date"} data={createdAt} />
        <Postdata
          label={"Disease Detected"}
          data={diseasefound ? "true" : "false"}
          color="red"
        />
        <Postdata label={"Crop Type"} data={croptype} />
      </Box>
      <span style={{ flexGrow: 1 }} />
      {/* <Image src={images}  width={100} style={{borderRadius:'10px'}} alt="qwpq" height={100}/> */}
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
function PostsScreen() {
  const [Plants, setPlants] = useState("Apple");
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  const [PostData, setPostData] = useState([
    {
      croptype: "Apple",
      diseasefound: true,
      diseasetype: "Black Rot Apple",
      image: "https://namc.pmd.gov.pk/images/crop-reports.jpg",
      createdAt: "82434344343",
      updatedAt: "skdksdjksdks",
      _id: "8ss",
    },
    {
      croptype: "Apple",
      diseasefound: true,
      diseasetype: "Black Rot Apple",
      image: "https://namc.pmd.gov.pk/images/crop-reports.jpg",
      createdAt: "82434344343",
      updatedAt: "skdksdjksdks",
      _id: "sa",
    },
  ]);

  async function addPost() {

    if (!Plants || !image) {
      return;
    }

    const uri = "https://eyic-backend.vercel.app/v1/posts/addpost";

      const response = await axios.post(uri, {
        diseasefound: true,
        diseasetype: "DiseaseAb",
        planttype: Plants,
        image: result,
      });
      console.log(response)
      if (response) {
        alert('Posted Crop Successfully')
        fetchall()
      }  
  }

  async function fetchall() {
    const uri = "https://eyic-backend.vercel.app/v1/posts/all";

    try {
      const response = await axios.get(url);
      if (response) {
        setPostData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();
  console.log(result);

  return (
    <Box>
      <Stack direction={"column"} gap={2}>
        <Box>
          <Stack direction={"row"} gap={2}>
            <Button
              variant="contained"
              component="label"
              sx={{
                width: "30%",
                background: "#fff",
                boxShadow: "0px 0px 100px 10px rgba(0,0,0,0.2)",
                color: "#000000",
                borderRadius: "50px",
              }}
            >
              + Upload
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
            <FormControl sx={{ width: "70%", color: "black" }}>
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
                {SelectCrop.map((a, i) => (
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
            <Typography sx={{ fontWeight: 800 }}>NO IMAGE</Typography>
          )}
        </Box>
        {/* // use OnClick POst */}
        <Button sx={{ background: "green", color: "white" }} onClick = {addPost}>POST</Button>
        <HeaderBoxBody title={"Past Sent Images"}>
          <Stack gap={1}>
            {PostData.map((a) => {
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
