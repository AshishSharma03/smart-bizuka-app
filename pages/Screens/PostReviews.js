import { Box ,IconButton,Stack,Typography} from '@mui/material'
import Image from 'next/image';
import React, { useEffect ,useRef,useState} from 'react'
import Loader from './Loader';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { async } from '@firebase/util';

const Postdata = ({ label, data, color }) => {
    return (
      <Stack gap={1} direction="row">
        <Typography sx={{ fontWeight: 800 }}>{label} : </Typography>
        <Typography sx={{ color: color }}>{data}</Typography>
      </Stack>
    );
  };
  
  const Posts = ({
    onClick,
    croptype,
    diseasefound,
    createdAt,
    images,
    updatedAt,
    id,
  }) => {
  
    return (
      <Box
        onClick={onClick}
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
    const [Index, setIndex] = useState(10);
    const [open,setOpen] = useState(false)
    const [CloseUpdata,setCloseUpdata] = useState()
    const ref = useRef()

    useEffect(()=>{
        NeedPost(Index)
    },[Index])
   
    const NeedPost = async (_index) =>{

        try{
            const res = await fetch(`/api/CropPost?limit=${_index}`)
            const data = await res.json()

            if(res.ok){
            console.log(data)
            setPostReview(data.data.reverse())
            setLoading(false)
            }
        }catch(err){
            console.log(err)
        }
        
    }

    const onscroll = ()=>{
      const current  = ref.current;
      if(current){
        const {scrollTop , clientHeight , scrollHeight}= current
        const computedScrollHeight = Math.round(scrollTop) + clientHeight
        if(scrollHeight >= computedScrollHeight - 1 && scrollHeight <= computedScrollHeight + 1 ){
            console.log('reachBottom')
            setIndex(Index => Index + 2)
            if(scrollTop === 0){
              console.log('Top Scroll is 0')
            }
        }
      }
    }

    const OpenPost = async (_id)=>{
      console.log(_id)
      setOpen(true)
       try{
          const  res = await fetch(`http://localhost:3000/api/GetSingleCrop?id_=${_id}`)
          const data = await res.json()
          
          setCloseUpdata(data.data)
       }catch(err){
          console.log(err)
       }

    }

    if(Loading){
        return <Loader height="80vh"/>
    }

  if(open){
    return <Box sx={{minHeight:"80vh",position:'relative'}} >
            <IconButton onClick={()=>{setOpen(false)}} sx={{position:"absolute",top:"0px",right:"0px"}}>
        <CloseRoundedIcon/></IconButton>
        {console.log(CloseUpdata)}
        <Stack gap={2}>
        <Typography ><span style={{fontWeight:800}}>ID :</span> 641846ed7d6a21513737f660 </Typography>
        <Typography ><span style={{fontWeight:800}}>Disease Type :</span> Potato Late Blight </Typography>
        {
          (CloseUpdata?.image)?
        <Image alt="" src={CloseUpdata?.image} width={100} height={100} />
        :""
        }
        <Typography ><span style={{fontWeight:800,}}>Review by expert :</span> 
        </Typography>
        <Typography sx={{fontSize:"20px",color:"green"}}>Your crop require more fertilizers and remove the defected leaf's from your field.</Typography>
        </Stack>
        </Box>
  }

  return (
    <Box ref={ref} onScroll={onscroll}>
     <HeaderBoxBody>
          <Stack gap={1}>
            {PostReview.map((a) => {
              
              return (
                <Posts
                onClick={()=> OpenPost(a._id)}
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