import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function ItemCart({ product }) {
    const { removeItem } = useCartContext();
    return (
        <Card sx={{padding:"20px" , marginBottom:"20px"}}>

            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
            >

                <Grid item>
                    <CardMedia
                        component="img"
                        image={product.pictureUrl}
                        height="200"
                    />
                </Grid>

                <Grid item>
                    <CardContent>
                        <Typography variant="h5" color="initial">{product.name}</Typography>
                        <Typography variant="body1" color="initial">Cantidad: {product.quantity}</Typography>
                        <Typography variant="body1" color="initial">Precio Unitario: ${product.price}</Typography>
                        <Typography variant="body1" color="initial">Subtotal: ${product.quantity * product.price}</Typography>
                    </CardContent>
                </Grid>

                <Grid item>
                    <CardActions>
                        <Button variant='contained' onClick={() => removeItem(product.id)}>Eliminar</Button>
                    </CardActions>
                </Grid>

            </Grid>

        </Card>
    )
}
