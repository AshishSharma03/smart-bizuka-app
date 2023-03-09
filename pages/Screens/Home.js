import React from 'react'
import { AppBar, Avatar, Box, Button, ButtonGroup, Container, IconButton, Stack, Toolbar, Typography ,Badge, Grid, Divider} from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

const HeaderBoxBody =({title,children,noHeader})=>{

    return (
        <Stack gap={1} zIndex={99}>
            {(!noHeader)?
        <Box sx={{padding:"10px 20px",borderRadius:"10px " ,boxShadow:"0px 0px 100px 5px rgba(0,0,0,0.2 )"}}>
          <Stack><Typography sx={{fontSize:"18px",fontWeight:800}}>{title}</Typography></Stack>
        </Box>
        :""}
        <Box sx={{padding:"20px",borderRadius:"10px",boxShadow:"0px 0px 100px 5px rgba(0,0,0,0.2 )"}}>
         {children}
        </Box>
        </Stack>
    )

}


function Home() {
  return (
    
    <Stack gap={3}>
        <HeaderBoxBody title={'Weather'}>
        <Stack direction={'row'} gap={2} justifyContent="center">
                {WeatherData.map((a)=> <WeatherComponent type={a.Type} unit={a.unit} data={a.data} />)}
          </Stack>
        </HeaderBoxBody>
        <HeaderBoxBody title={'Field Detail'}>
            <Stack direction={"row"} justifyContent="center">
                    <Box width={"50%"}  display="flex" justifyContent={"center"}  >
                        <Stack >
                            <Typography sx={{fontSize:"12px",fontWeight:800}}>Soil</Typography>
                            <Typography sx={{fontSize:"12px",fontWeight:800}}>Tempreture</Typography>
                            <Stack direction={'row'}>
                            <Typography sx={{fontSize:"20px"}}>22</Typography>
                            <Typography >Celicus</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <span style={{padding:"1px",background:'gray'}} />
                    <Box width={"50%"} display="flex" justifyContent={"center"} >
                        <Stack>
                            <Typography sx={{fontSize:"12px",fontWeight:800}}>Soil</Typography>
                            <Typography sx={{fontSize:"12px",fontWeight:800}}>Tempreture</Typography>
                            <Stack direction={'row'}>
                            <Typography sx={{fontSize:"20px"}}>22</Typography>
                            <Typography>Celicus</Typography>
                            </Stack>
                        </Stack>
                    </Box>
            </Stack>
           
        </HeaderBoxBody>
        <HeaderBoxBody noHeader>
        <Stack sx={{padding:"10px"}} gap={1}>
                    <Typography style={{fontSize:"20px",fontWeight:800}}>IS CROP HEALTHY?</Typography>
                    <Stack direction={"row"} alignItems="center" gap={1}> <CheckCircleIcon sx={{fontSize:"30px",color:"green"}}/> <Typography sx={{fontSize:"20px",fontWeight:800,color:"green"}}>YES</Typography>  </Stack>
            </Stack>
        </HeaderBoxBody>
    </Stack>
   
  )
}

export default Home