import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import React from 'react';



export default function CartWidget() {
  return (
    <>
      <Button variant="outline" color="inherit">
        <ShoppingCartOutlinedIcon />
      </Button>
    </>
  )
}

