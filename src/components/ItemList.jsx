import { Grid } from '@mui/material'
import React from 'react'
import Item from './Item'



export default function ItemList({ items }) {


    return (
        <>
            <Grid container spacing={2}>

                {items.map((item) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Item product={item} />
                        </Grid>
                    )
                })}

            </Grid>







        </>
    )
}
