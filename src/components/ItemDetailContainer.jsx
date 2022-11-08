import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../data/data.json'
import ItemDetail from './ItemDetail'




export default function ItemDetailContainer() {

    const [data, setData] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        const getData = new Promise(res => {
            setTimeout(() => {
                res(Data);
            }, 1000);
        })

        getData.then(res => setData(res.find(Data => Data.id === parseInt(itemId))));


    }, [itemId])







    return (
        <ItemDetail data={data} />
    )
}
