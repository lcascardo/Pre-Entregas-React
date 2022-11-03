import React from 'react'
import Button from '@mui/material/Button'
import { Box, Grid } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useState,useEffect} from 'react'


export default function ItemCount({initial,stock,onAdd}) {

    const [count,setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    //NO SE COMO USAR EL useEffect en este caso
    useEffect(
        ()=> {setCount(initial);
        }, []
    )


    return (
        <>
        
       <Grid container spacing={2}>
       <Grid item>
       <Box sx={{
                border: '1px solid #D3D3D3',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                width:'200px'
            }}>
                <Button variant="text" color="inherit" onClick={decrease} disabled={count <= 1}>
                    <Remove color='primary'/>
                </Button>
                <span>{count}</span>
                <Button variant="text" color="inherit" onClick={increase} disabled={count >= stock}>
                    <Add color='primary'/>
                </Button>
            </Box>
       </Grid>
           <Grid item>
           <Button variant="outlined" color="primary" sx={{width:'200px'}} disabled={stock <= 0} onClick={()=>{onAdd(count);setCount(initial)}}>
                Agregar al Carrito
            </Button>
           </Grid>
       </Grid>
        
        </>
    )
}
