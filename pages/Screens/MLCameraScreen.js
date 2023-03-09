
import { Box } from '@mui/material'
import React,{useEffect,useRef,useState} from 'react'




function MLCameraScreen() {
    const videoRef = useRef(); 
    // const [Loaded, setLoaded] = useState(false); 
    //     useEffect(() => {
    //             navigator.mediaDevices
    //             // .getUserMedia({ video: {facingMode:{exact:"environment"}}, audio: false })
    //             .getUserMedia({ video: true, audio: false })
    //             .then((stream) => {
    //                 videoRef.current.srcObject = stream;
    //                 videoRef.current.play();
    //                 setLoaded(true);
    //             });
            
    //     }, []);

  return (
    <Box display={'flex'} justifyContent="center" alignItems="center"  minHeight="80vh">
        {/* <WebView source={{uri:"https://mlbizuka-backup.vercel.app/"}} /> */}
        <iframe src='https://mlbizuka-backup.vercel.app/' allow='camera'
                style={{height:"80vh",width:"100%",border:"none"}}
        />

    </Box>
  )
}

export default MLCameraScreen