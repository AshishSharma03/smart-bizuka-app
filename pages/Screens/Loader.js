import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Loader({height = "100vh"}) {
  return (
    <Box
    sx={{minHeight:height,display:"flex",justifyContent:"center",alignItems:"center"}}
    >
        <CircularProgress
        sx={{color:"#4AAC7B",position:'absolute'}}
        thickness={5}
        value={0}
        />
       
    </Box>
  )
}

export default Loader