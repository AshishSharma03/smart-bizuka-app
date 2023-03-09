import { Box } from '@mui/material'
import React,{useEffect,useRef,useState} from 'react'

function MLCameraScreen() {
    const videoRef = useRef();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video:true,audio:false}).then((Stream)=>{
                videoRef.current.srcObject = Stream
                videoRef.current.play();
                setLoaded(true)
        })
    }, []);

  return (
    <Box display={"flex"} justifyContent="center" alignContent={"center"} minHeight="80vh">
        <video 
        ref={videoRef}
        style={{ transform: "scale(-1, 1)",position:"fixed" }}
        width={400}
        height={400}
        />  
        {/* <iframe src='https://mlbizuka-backup.vercel.app/'  style={{minHeight:"80vh",width:"100%",border:"none"}}/> */}

    </Box>
  )
}

export default MLCameraScreen