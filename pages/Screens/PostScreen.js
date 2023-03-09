import { Box, Select ,Option, MenuItem,Button, Grid, Typography, Chip} from '@mui/material'
import { Stack } from '@mui/system'
import Image from 'next/image'
import React from 'react'


const SelectCrop = ['Apple','Rice','Mango']
const PostData = [
  {
  croptype: "Apple",
  diseasefound: true,
  diseasetype: "Black Rot Apple",
  image: "https://namc.pmd.gov.pk/images/crop-reports.jpg",
  createdAt: "82434344343",
  updatedAt: "skdksdjksdks",
  _id: "8364834864"
},
{
  croptype: "Apple",
  diseasefound: true,
  diseasetype: "Black Rot Apple",
  image: "https://namc.pmd.gov.pk/images/crop-reports.jpg",
  createdAt: "82434344343",
  updatedAt: "skdksdjksdks",
  _id: "8364834864"
}
]

const Postdata = ({label,data,color}) =>{
  return (

  <Stack gap={1} direction="row">
    <Typography sx={{fontWeight:800}} >{label} : </Typography>
    <Typography sx={{color:color}}>{data}</Typography>
  </Stack>
)
}

const Posts = ({croptype,diseasefound,createdAt,images,updatedAt,id}) =>{
  return (
  <Box sx={{display:"flex",flexDirection:"row",padding:"10px",borderRadius:"10px",boxShadow:"0px 0px 100px 5px rgba(0,0,0,0.2)"}}>
          <Box>
            <Postdata label={"Date"} data={createdAt} />
            <Postdata label={"Disease Detected"} data={diseasefound?"true": "false"} color="red"/>
            <Postdata label={"Crop Type"} data={croptype} />
          </Box>
          <span style={{flexGrow:1}}/>
          {/* <Image src={images}  width={100} style={{borderRadius:'10px'}} alt="qwpq" height={100}/> */}

  </Box>)
}


const HeaderBoxBody =({title,children})=>{

  return (
      <Stack gap={1}>
      <Box sx={{padding:"10px",borderRadius:"20px"}}>
        <Stack>{title}</Stack>
      </Box>
      <Box >
       {children}
      </Box>
      </Stack>
  )

}
function PostsScreen() {
  return (
   <Box>
    <Stack direction={"column"} gap={2}>

    <Box>
      <Stack direction={"row"} gap={2}>
      <Button variant="contained" component="label"  sx={{width:"30%",background:"#fff",boxShadow:"0px 0px 100px 10px rgba(0,0,0,0.2)",color:"#000000",borderRadius:"50px"}}>
        + Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <Select label="select Crop"  sx={{width:"70%",color:"black"}}>
        {SelectCrop.map((a)=> <MenuItem>{a}</MenuItem>)}
      </Select>
      </Stack>
    </Box>

    <Box sx={{height:"200px",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
       <Typography sx={{fontWeight:800}}>NO IMAGE</Typography>  
    </Box>
    <Button sx={{background:"green",color:"white"}}>POST</Button>
    <HeaderBoxBody title={"Past Sent Images"}>
      <Stack gap={1}>
      {PostData.map((a)=>{
        return <Posts
        croptype={a.croptype}
        diseasefound= {a.diseasefound}
        diseasetype = {a.diseasetype}
        images= {a.image}
        createdAt= {a.createdAt}
        updatedAt = {a.updatedAt}
        id ={a._id}
        key={a._id}
        />
      })}
      </Stack>
    </HeaderBoxBody>
    </Stack>
   </Box>
  )
}

export default PostsScreen;