import { CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


export default function ItemListContainer() {

  const { categoryId } = useParams();

  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    let productos;

    if (categoryId) {
      productos = query(collection(db, "productos"), where("category", "==", categoryId));
    } else {
      productos = collection(db, "productos");
    }

    getDocs(productos)
      .then(res => {
        setArrayDeProductos(res.docs.map(element => ({ id: element.id, ...element.data() })));
        setLoading(false);
      })

  }, [categoryId]);

  return (
    <>
      {
        loading ?
          <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <CircularProgress size={100} />
          </Container>

          :
            <ItemList items={arrayDeProductos} />
      }

    </>
  )
}


