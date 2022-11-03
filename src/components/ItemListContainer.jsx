import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from "../data/data.json";
import ItemList from './ItemList';
// import ItemCount from './ItemCount'

export default function ItemListContainer() {

  const { categoryId } = useParams();

  const [arrayDeProductos, setArrayDeProductos] = useState([]);


  useEffect(() => {
    let getData = new Promise((res, rej) => {
      setTimeout(() => {
        res(Data);
      }, 1000);
    })

    getData
      .then((res) => {
        if (categoryId) {
          setArrayDeProductos(res.filter(item => item.category == categoryId));
        }
        else {
          setArrayDeProductos(res);
        }
      });

  }, [categoryId])





  return (
    <>
      <ItemList items={arrayDeProductos} />
    </>
  )
}


