import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { products } from '../data/products';
import { ItemList } from "../components/ItemList";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);

        });

        mypromise.them((response) => setItems(response));
    }, []);

   

    return (
        <Container className="mt-5">
            <h1>{props.greeting}</h1>
            <ItemsList items={items}/>
        </Container>

    );
}