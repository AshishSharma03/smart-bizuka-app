import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import BizukaImage from '../public/assets/BizukaBody/0004.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Battery60Icon from '@mui/icons-material/Battery60';
import CircleIcon from '@mui/icons-material/Circle';
import { useRouter } from 'next/router';

function ShowMyBizuka() {
const router = useRouter()
  return (
  
    <Box  sx={{minHeight:"100vh",display:"flex",justifyContent:'center',alignItems:"center"}}>
      <Typography sx={{position:"absolute",fontSize:"20px",fontWeight:"800",top:"0px",color:"green",background:"#ffffff",padding:"10px",borderRadius:"10px",boxShadow:"0px 0px 100px 10px rgba(0,0,0,0.2)"}}>Device Maintenance Report</Typography>
      <Stack sx={{position:"absolute",right:"10px"}} alignItems="center" justifyContent={"center"}>
      <Battery60Icon style={{fontSize:"80px",color:"green",paddingRight:"10px"}}/>
      <Typography sx={{fontSize:"25px",fontWeight:800}}>60<span style={{fontSize:"15px"}}>%</span></Typography>
      </Stack>
      <IconButton size="large"  onClick={()=>{router.push('/')}} sx={{position:"absolute",bottom:"10px",left:"10px",boxShadow:"0px 0px 50px 1px rgba(0,0,0,0.4)",fontSize:"20px"}} color="success">
        <ArrowBackIcon sx={{fontWeight:"800"}}/>
      </IconButton>
      <Box sx={{position:"absolute",bottom:"20px"}}>
        <Stack direction={"row"} gap={2}>
          <Stack direction={"row"} gap={1} alignItems="center">
            <CircleIcon sx={{fontSize:"10px",color:"green"}}/> <Typography sx={{fontWeight:800}}>Working</Typography>
          </Stack>
          <Box sx={{padding:"1px",background:"#DBDBDB",borderRadius:"50px"}}/>
          <Stack direction={"row"} gap={1} alignItems="center">
            <CircleIcon sx={{fontSize:"10px",color:"red"}}/> <Typography sx={{fontWeight:800}}> Not Working</Typography>
          
          </Stack>

        </Stack>
      </Box>
      <Image src={BizukaImage} alt="  " style={{height:"600px",maxWidth:"500px"}} />
    </Box>
    
  )
}

export default ShowMyBizuka