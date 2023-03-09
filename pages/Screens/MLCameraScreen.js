import { Box } from '@mui/material'
import React,{useEffect,useRef,useState} from 'react'

function MLCameraScreen() {
    const videoRef = useRef(); 
    const [Loaded, setLoaded] = useState(false); 
        useEffect(() => {
            navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
              videoRef.current.srcObject = stream;
              videoRef.current.play();
              setLoaded(true);
            });
        }, []);

  return (
    <Box display={'flex'} justifyContent="center" alignItems="center"  minHeight="80vh">
        <video
        style={{position:"fixed"}}
        ref={videoRef}
        />
    </Box>
  )
}

export default MLCameraScreen