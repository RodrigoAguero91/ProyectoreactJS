import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';

import { products } from '../data/products';
import { ItemList } from "../components/ItemList";
import context from 'react-bootstrap/esm/AccordionContext';

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const  value= useContext(CartContext);

    const { id } = useParams();

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);

        });

        mypromise.then((response) => {
            if (!id) {
                setItems(response);
            } else {
                const filterByCategory = response.filter(
                    (item) => item.category === id
                );
                setItems(filterByCategory);
            }
        });
    }, [id]);



    return (
        <Container className="mt-5">
            <h1>{props.greeting} - {value}</h1>
            <ItemList items={items} />
        </Container>

    );
}