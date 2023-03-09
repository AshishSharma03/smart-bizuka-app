import { AppBar, Avatar, Box, Button, ButtonGroup, Container, IconButton, Stack, Toolbar, Typography ,Badge} from '@mui/material'
import React,{useState} from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Home from './Screens/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PostsScreen from './Screens/Posts';
import Link from 'next/link';

const BtnIcon = [
  {
    id : "Home",
    icon :<HomeRoundedIcon/>
    
  },
  {
    id : "Post",
    icon : <ImageRoundedIcon/>,
  },
  {
    id :"Image",
    icon :<CameraAltRoundedIcon/>
  },
  {
    id:"Expert",
    icon :<CallRoundedIcon/>
  }]
    

    
    


function index() {
  const [Screen, setScreen] = useState(1);

  return (
    <Box sx={{minHeight:"100vh"}}>
      <Container>

    <AppBar position='static'  sx={{background:"#ffffff",boxShadow:"none",padding:"10px 0px"}}>
        <Toolbar>
              <Typography sx={{color:"#000000",fontSize:"20px",fontWeight:800}}>Good Morning</Typography>
              <span style={{flex:1}} />
            <IconButton>
              <Badge badgeContent={4}>
              <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar/>
            </IconButton>
        </Toolbar>
    </AppBar>
    
     {(Screen === 0)? <Home/> : ""}
     {(Screen === 1)? <PostsScreen/> : ""}
     {/* {(Screen === BtnIcon[2].id)? :""} */}
      <Box sx={{background:"black", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Stack direction={'row'} sx={{position:"absolute",bottom:"10px",borderRadius:"50px",background:"#fff",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.2)"}}>
          {BtnIcon.map((a,i)=> <IconButton size='large' key={i} sx={{padding:"20px"}} onClick={()=>{setScreen(i)}}>
            {a.icon}
          </IconButton>)}
        </Stack>
      </Box>
            </Container>
    </Box>
  )
}

export default index