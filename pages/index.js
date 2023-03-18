import { AppBar, Avatar, Box, Button, ButtonGroup, Container, IconButton, Stack, Toolbar, Typography ,Badge} from '@mui/material'
import React,{useState,useEffect} from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Home from './Screens/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PostsScreen from './Screens/PostScreen';
import MLCameraScreen from './Screens/MLCameraScreen';
import Loader from './Screens/Loader';
import PostReviews from './Screens/PostReviews';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ReviewsIcon from '@mui/icons-material/Reviews';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

const BtnIcon = [
  {
    id : "Home",
    icon :<HomeRoundedIcon/>
    
  },
  {
    id : "Post",
    icon : <PostAddIcon/>,
  },
  {
    id : "Review",
    icon : <ReviewsIcon/>,
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
  const [componentMounted,WillComponentMount] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
      setTimeout(()=>{
          WillComponentMount(true)
      },400)

  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };  



  if(!componentMounted){
    return <Loader/>
  }



// console.log(cropPosts)
  return (
    <Box sx={{minHeight:"100vh"}}>

      <AppBar position={'sticky'}  sx={{background:'#fff',boxShadow:"none",padding:"10px 0px",display:(scroll>= 90)?'block' :"none",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.1)"}}>
        <Container>

        <Toolbar>
              <Typography sx={{color:"#000000",fontSize:"20px",fontWeight:800}}>Sunny <WbSunnyRoundedIcon sx={{color:"#FFD022"}}/></Typography>
              <span style={{flex:1}} />
            <IconButton>
              <Badge badgeContent={4} color="info">
              <NotificationsIcon sx={{color:"#FFBA23"}}/>
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar/>
            </IconButton>
        </Toolbar>
        </Container>
    </AppBar>
      <Container>
    
    <AppBar position={'static'}  sx={{background:'none',boxShadow:"none",padding:"10px 0px",display:(scroll>= 90)?'none' :"block"}}>
        <Toolbar>
              <Typography sx={{color:"#000000",fontSize:"20px",fontWeight:800}}>Sunny <WbSunnyRoundedIcon sx={{color:"#FFD022"}}/></Typography>
              <span style={{flex:1}} />
            <IconButton>
            <Badge badgeContent={4} color="info">
              <NotificationsIcon sx={{color:"#FFBA23"}}/>
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar />
               
            </IconButton>
        </Toolbar>
    </AppBar>
    
     {(Screen === 0)? <Home/> : ""}
     {(Screen === 1)? <PostsScreen />: ""}
     {(Screen === 2)? <PostReviews />: ""}
     {(Screen === 3)? <MLCameraScreen/>: ""}

      
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


function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  doc.advice = doc.advice?.toString() ?? "";
  return doc;
}



// export async function getStaticProps(){
  // await dbConnect()
  // const res = await cropModel.find({}).lean()
  // return {props : { cropPosts : res.map(convertDocToObj) }}
  
// }


export default index