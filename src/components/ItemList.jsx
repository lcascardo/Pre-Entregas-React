import { Container, Grid } from '@mui/material'
import React from 'react'
import Item from './Item'



export default function ItemList({ items }) {
    return (
        <>
                <Container maxWidth="lg">

                    <Grid container spacing={4} sx={{ padding: "40px" }}>

                        {items.map((item) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                    <Item product={item} />
                                </Grid>
                            )
                        })}

                    </Grid>

                </Container>
        </>
    )
}


