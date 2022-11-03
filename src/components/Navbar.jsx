import { Tab, Tabs } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


export default function Navbar() {
  return (
    <>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h5">
            <Link to={`/`}>
              Tienda Online
            </Link>
          </Typography>
          <Tabs textColor='inherit' value={0}>
            <Link to={`/`}>
              <Tab label='Inicio' />
            </Link>
            <Link to={`category/celular`}>
              <Tab label='Celulares' />
            </Link>
            <Link to={`category/tablet`}>
              <Tab label='Tablets' />
            </Link>
            <Link to={`category/notebook`}>
              <Tab label='Notebooks' />
            </Link>
          </Tabs>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </>
  )
}

