import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';


export default function ItemDetail({ data }) {

  const [goToCart, setGoToCart] = useState(false);

  const { addItem } = useCartContext();

  function onAdd(quantity) {
    setGoToCart(true);
    addItem(data, quantity);
  }





  return (
    <>
      <Card sx={{ padding: "40px" , width:"70%" }}>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
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
              <Typography variant="h3" color="initial" sx={{ textAlign: "center", padding: "20px" }}>{data.name}</Typography>
              <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>${data.price}</Typography>
              <Typography variant="h6" color="initial" sx={{ textAlign: "center", padding: "20px" }}>{data.description}</Typography>
            </CardContent>

            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              {
                goToCart ?
                  <Link to='/cart' style={{ textDecoration: "none" }}>
                    <Button variant="contained">Terminar compra</Button>
                  </Link> :
                  <ItemCount initial={1} stock={data.quantity} onAdd={onAdd} />
              }
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
