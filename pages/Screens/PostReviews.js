import { Box ,Stack,Typography} from '@mui/material'
import Image from 'next/image';
import React, { useEffect ,useState} from 'react'
import Loader from './Loader';


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
          <Postdata label={"Date"} data={""} />
          <Postdata
            label={"Disease Detected"}
            data={diseasefound ? "true" : "false"}
            color={diseasefound ? "red" : "green"}
          />
          <Postdata label={"Crop Type"} data={croptype} />
        </Box>
        <span style={{ flexGrow: 1 }} />
        {images?
        <Image src={images}  width={100} style={{borderRadius:'10px'}} alt="qwpq" height={100}/>
        :""
        }
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
  

function PostReviews() {
    const [PostReview, setPostReview] = useState();
    const [Loading, setLoading] = useState(true);

    useEffect(()=>{
        NeedPost()
    },[])

    const NeedPost = async () =>{

        try{

            const res = await fetch('/api/CropPost')
            const data = await res.json()
            
            if(res.ok){
            console.log(data.data)
            setPostReview(data.data.reverse())
            setLoading(false)
            }
        }catch(err){
            console.log(err)
        }
        
    }

    if(Loading){
        return <Loader height="80vh"/>
    }

  return (
    <Box>
     <HeaderBoxBody>
          <Stack gap={1}>
            {PostReview.map((a) => {
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
    </Box>
  )
}

export default PostReviews