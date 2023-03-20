import React, { useEffect ,useState} from 'react'
import { AppBar, Avatar, Box, Button, ButtonGroup, Container, IconButton, Stack, Toolbar, Typography ,Badge, Grid, Divider, Icon,  Slider} from '@mui/material'
import Battery60Icon from '@mui/icons-material/Battery60';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/router';
import Image from 'next/image';
import WellPlant from '../../public/assets/BizukaBody/WellPlant.png'

const WeatherData = [
    {
        id:"a",
        Type:"Pressure",
        data:67,
        unit:"NA"    
    },
    {
        id:"b",
        Type:"Humidity",
        data:45,
        unit:"NA"
    },
    {
        id:"c",
        Type:"Wind",
        data:6,
        unit:"NA"
    }
]





const WeatherComponent = ({type,data,unit}) =>{
    return ( 
    <Box sx={{padding:"10px 20px"}}>
    <Stack>
          <Typography sx={{fontSize:"15px",fontWeight:800}}>{type}</Typography>
          <Stack direction={'row'}>
          <Typography sx={{fontSize:"20px"}}>{data}</Typography>
          <Typography>{unit}</Typography>
          </Stack>
    </Stack>
</Box>)
}

const HeaderBoxBody =({title,children,noHeader,gap=1,icon,titleColor})=>{

    return (
        <Stack gap={gap} zIndex={99}>
            {(!noHeader)?
        <Box sx={{display:"flex",flexDirection:"row",padding:"10px 20px",borderRadius:"10px " ,boxShadow:"0px 0px 100px 5px rgba(0,0,0,0.2 )"}}>
          <Typography sx={{fontSize:"18px",fontWeight:800,color:titleColor}}>{title}</Typography>
            <span style={{flexGrow:1}}/>
            {icon}
            
        </Box>
        :""}
        <Box sx={{padding:"20px",borderRadius:"10px",boxShadow:"0px 0px 100px 5px rgba(0,0,0,0.2 )"}}>
         {children}
        </Box>
        </Stack>
    )

}

const marks = [
    {
      value: 13,
      label: 'Bad',
    },
    {
      value: 40,
      label: 'Well',
    },
    {
      value: 70,
      label: 'Optimal',
    },
    {
      value: 100,
      label: 'excess',
    },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }

function Home() {
const router = useRouter()
const [Temp , setTemp] = useState(0)

  useEffect(()=>{

  NewData()

  },[])


// setInterval(()=>{
//   NewData()
// },2000)

 const NewData = async ()=>{
  try{
    
    const res = await fetch('/api/GetSoilData',{
      method :"GET"
    })
    const data = await res.json()
    setTemp(data.a)
  }catch(err){
    console.log(err)
  }
}

  
  return (
    
    <Stack gap={2} paddingBottom="100px">
         <HeaderBoxBody noHeader>
        <Typography style={{fontSize:"15px",fontWeight:800}}>PLNAT CONDITION</Typography>
        <Stack sx={{padding:"10px"}} gap={1} direction="row">
                    <Stack direction={"row"} alignItems="center" gap={0.5}> 
                    <CheckCircleIcon sx={{fontSize:"30px",color:"green"}}/> <Typography sx={{fontSize:"20px",fontWeight:800,color:"green"}}>Well</Typography>  </Stack>
                    <span style={{flexGrow:1}}/>
                    <Image src={WellPlant} alt="" style={{width:"100px",height:"100px"}}  />
            </Stack>
        </HeaderBoxBody>
       
        <HeaderBoxBody title={'Field Detail'}>
            <Stack direction={"column"} justifyContent="center" alignItems={"center"}>
                <Typography sx={{fontSize:"20px",fontWeight:800,color:"#EF9725"}}>Soil Moisture Condition</Typography>

                    <Box width={"80%"}  display="flex" justifyContent={"center"}  >
                        {/* // RealTime Data */}
                    <Slider
                    aria-label="Always visible"
                    value={Temp}
                    disabled
                    style={{color:"#EF9725"}}
                    getAriaValueText={valuetext}
                    step={10}
                    marks={marks}
                    // valueLabelDisplay="on"
                   
                 />
                    </Box>
                  
            </Stack>
           
        </HeaderBoxBody>
       
        <HeaderBoxBody title={'MY BIZUKA'} titleColor={"green"} gap={1} >
                <Stack direction={"row"}>
                <Stack>
                    <Typography sx={{fontWeight:700}}><span style={{color:"#B0B0AF"}}>Device_ID :</span> #1198308032  </Typography>
                    <Typography sx={{fontWeight:700}}><span style={{color:"#B0B0AF"}}>Device Condition :</span> <span style={{color:"green"}}>GOOD</span>  </Typography>
                </Stack>
                <span style={{flexGrow:1}}/>
                <Battery60Icon style={{fontSize:"40px",color:"green"}}/>
                </Stack>
                <Stack direction={"row"} gap={2} paddingTop="10px">
        <Button variant="outlined" fullWidth sx={{fontSize:"12px"}} color="info" onClick={()=>{ router.push('/ShowMyBizuka')}}>Show my Device</Button>
        <Button variant="outlined" fullWidth sx={{fontSize:"12px"}} color="success" onClick={()=>{ router.push('/')}}>Change Device</Button>
                </Stack>
        </HeaderBoxBody>
    </Stack>
   
  )
}

export default Home