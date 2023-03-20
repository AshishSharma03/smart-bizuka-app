import { Box, Button,Stack } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
function ExpertConnect() {
  return (
    <Box sx={{minHeight:"80vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Stack gap={2}>
         <PhoneIcon sx={{fontSize:"100px",color:"#ccc"}}/>
            <Button variant='contained' sx={{background:"green"}}>Call</Button>
        </Stack>
    </Box>
  )
}

export default ExpertConnect