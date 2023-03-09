import React from 'react'
import { AppBar, Avatar, Box, Button, ButtonGroup, Container, IconButton, Stack, Toolbar, Typography ,Badge, Grid} from '@mui/material'

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

const HeaderBoxBody =({title,children})=>{

    return (
        <Stack gap={1}>
        <Box sx={{padding:"20px",borderRadius:"20px ",boxShadow:"0px 0px 100px 5px rgba(0,0,0,0.2 )"}}>
          <Stack>{title}</Stack>
        </Box>
        <Box sx={{padding:"20px",borderRadius:"20px",boxShadow:"0px 0px 100px 5px rgba(0,0,0,0.2 )"}}>
         {children}
        </Box>
        </Stack>
    )

}


function Home() {
  return (
    
    <Stack gap={4}>
        <HeaderBoxBody title={'Weather'}>
        <Stack direction={'row'} gap={2} justifyContent="center">
                {WeatherData.map((a)=> <WeatherComponent type={a.Type} unit={a.unit} data={a.data} />)}
          </Stack>
        </HeaderBoxBody>
        <HeaderBoxBody title={'Field Detail'}>
            <Stack direction={"row"} justifyContent="center">
                    <Box width={"50%"}>
                        <Stack>
                            <Typography>Soil</Typography>
                            <Typography>Tempreture</Typography>
                            <Stack direction={'row'}>
                            <Typography>22</Typography>
                            <Typography>Celicus</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack>
                            <Typography>Soil</Typography>
                            <Typography>Tempreture</Typography>
                            <Stack direction={'row'}>
                            <Typography>22</Typography>
                            <Typography>Celicus</Typography>
                            </Stack>
                        </Stack>
                    </Box>
            </Stack>
            <Box sx={{padding:"20px"}}>
                    <Typography>IS CROP HEALTHY?</Typography>
                    <Stack direction={"row"}> <CheckCircleIcon/> <Typography>YES</Typography>  </Stack>
            </Box>
        </HeaderBoxBody>
    </Stack>
   
  )
}

export default Home