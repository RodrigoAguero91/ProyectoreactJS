import { useContext } from "react";
import { Container } from "react-bootstrap";

import{ CarContext} from "../contexts/CartContext";

export const Cart = () => {
    const {clear, items} = useContext(CarContext);

    return (
        <Container className="mt-4" >
            <h1>Carrito</h1>
            {items?.map((item) => (

                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <h3>{item.price}</h3>
                        <img src={items.pictureUrl} width={300}></img>
                        </div>
                     ))}

                <button onClick={clear}>Vaciar carrito</button>

        </Container>

    );


};