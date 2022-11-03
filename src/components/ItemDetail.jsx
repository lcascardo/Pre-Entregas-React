import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
export default function ItemDetail({ data }) {
  return (
    <>
      <Card sx={{ padding: "40px" }}>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >


          <Grid item sm={12} md={6}>

            <CardMedia
              component="img"
              image={data.pictureUrl}
              alt="Celular"
            />

          </Grid>

          <Grid item sm={12} md={6}>

            <CardContent>
              <Typography variant="h3" color="initial" sx={{ textAlign: "center", padding: "20px" }}>{data.title}</Typography>
              <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>${data.price}</Typography>
              <Typography variant="subtitle1" color="initial" sx={{ textAlign: "center", padding: "20px" }}>{data.description}</Typography>
            </CardContent>

            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant='contained'>Agregar al Carrito</Button>
            </CardActions>

            <CardContent>
              <Typography variant="subtitle1" color="initial" sx={{ textAlign: "center" }}>Stock disponible: {data.quantity}</Typography>
            </CardContent>

          </Grid>


        </Grid>
      </Card>


    </>
  )
}
