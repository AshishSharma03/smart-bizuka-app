import { AppBar, Avatar, Box, Button, ButtonGroup, Container, IconButton, Stack, Toolbar, Typography ,Badge} from '@mui/material'
import React,{useState} from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Home from './Screens/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PostsScreen from './Screens/PostScreen';



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
  const [Screen, setScreen] = useState(0);

  return (
    <Box sx={{minHeight:"100vh"}}>
      <Container>

    <AppBar position='sticky'  sx={{background:"none",boxShadow:"none",padding:"10px 0px"}}>
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
     {(Screen === 1)? <PostsScreen/>: ""}
     {/* {(Screen === 2)? <MLCameraScreen/>: ""} */}
     {/* {(Screen === 3)? <ExpertScreen/>: ""} */}
    
      <Box sx={{background:"black", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Stack direction={'row'} sx={{zIndex:99,position:"fixed",bottom:"10px",borderRadius:"50px",background:"#fff",boxShadow:"0px 0px 100px 1px rgba(0,0,0,0.2)"}}>
          {BtnIcon.map((a,i)=> <IconButton size='large' key={i} sx={{padding:"20px",color:(i === Screen)?"green":""}} onClick={()=>{setScreen(i)}}>
            {a.icon}
          </IconButton>)}
        </Stack>
      </Box>
            </Container>
    </Box>
  )
}

export default index