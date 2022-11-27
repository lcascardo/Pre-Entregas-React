import { CircularProgress, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemDetail from './ItemDetail';




export default function ItemDetailContainer() {

    const { cart } = useCartContext();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        let producto = doc(db, "productos", itemId);
        getDoc(producto)
            .then(res => {
                const found = cart.find(item => item.id == itemId);
                const quantity = found ? found.quantity : 0;
                setData({ id: res.id, ...res.data(), quantity: res.data().quantity - quantity });
                setLoading(false);
            })
    }, [itemId])



    return (
        <>
            {
                loading ?
                    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                        <CircularProgress size={100} />
                    </Container>
                    :
                    <Grid
                        container
                        justifyContent='center'
                        padding="40px"
                    >
                        <ItemDetail data={data} />
                    </Grid>
            }

        </>
    )
}
