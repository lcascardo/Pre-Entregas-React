import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ product }) {

  return (
    <>
      <Card>
        <CardHeader
          title={product.title}
          sx={{ textAlign: "center" }}

        />

        <CardMedia
          component="img"
          image={product.pictureUrl}
          alt="Celular"
        />

        <CardContent>
          <Typography variant="body1" color="initial" sx={{ textAlign: "center" }}>${product.price}</Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button>
            <Link to={`/detalle/${product.id}`}>
              Ver detalle del Producto
            </Link>
          </Button>
        </CardActions>

        <CardContent>
          <Typography variant="subtitle1" color="initial" sx={{ textAlign: "center" }}>Stock disponible: {product.quantity}</Typography>
        </CardContent>
      </Card>



    </>
  )
}
