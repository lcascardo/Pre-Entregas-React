import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ product }) {



  return (
    <>
      <Card>
        <Grid
          container
          direction='column'
          alignItems='center'
        >

          <Grid item>
            <CardMedia
              component="img"
              image={product.pictureUrl}
              alt="Celular"
              height='200'
              sx={{margin:"20px 0"}}
            />
          </Grid>

          <Grid item>
            <CardContent>
              <Typography variant="h5" color="initial" sx={{ textAlign: "center" , padding:"5px 0" }}>{product.name}</Typography>
              <Typography variant="body1" color="initial" sx={{ textAlign: "center" , fontSize:"2rem" , fontWeight:"600" }}>${product.price}</Typography>
            </CardContent>
          </Grid>

          <Grid item>
            <CardActions sx={{ display: "flex", justifyContent: "center" , padding:"0px"}}>
              <Link to={`/item/${product.id}`} style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{padding:"10px 15px"}}>
                  Ver detalle del Producto
                </Button>
              </Link>
            </CardActions>
          </Grid>

          <Grid item>

            <CardContent>
              <Typography variant="subtitle1" color="initial" sx={{ textAlign: "center" }}>Stock disponible: {product.quantity}</Typography>
            </CardContent>
          </Grid>













        </Grid>
      </Card>



    </>
  )
}
