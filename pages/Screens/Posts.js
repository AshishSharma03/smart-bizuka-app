import { Box, Select ,Option, MenuItem,Button} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'


const SelectCrop = ['Apple','Rice','Mango']
const PostData = [
  {
  croptype: "Apple",
  diseasefound: true,
  diseasetype: "Black Rot Apple",
  image: "http://madarchod.jpg",
  createdAt: "82434344343",
  updatedAt: "skdksdjksdks",
  _id: "8364834864"
}
]

const Posts = () =>{
  return (<Box>

  </Box>)
}


const HeaderBoxBody =({title,children})=>{

  return (
      <Stack gap={1}>
      <Box sx={{padding:"10px",borderRadius:"20px"}}>
        <Stack>{title}</Stack>
      </Box>
      <Box sx={{padding:"20px"}}>
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
      <Button variant="contained" component="label"  sx={{width:"30%"}}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <Select label="select Crop" sx={{width:"70%"}}>
        {SelectCrop.map((a)=> <MenuItem>{a}</MenuItem>)}
      </Select>
      </Stack>
    </Box>

    <Box sx={{height:"200px",background:"red",borderRadius:"10px"}}>
    </Box>
    <Button>POST</Button>
    <HeaderBoxBody title={"Past Sent Images"}>
      
    </HeaderBoxBody>
    </Stack>
   </Box>
  )
}

export default Posts;