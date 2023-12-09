import { useContext, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import {
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore";

const initialValues = {
    email: "",
    name: "",
    phone: "",
};

export const Cart = () => {
  const [buyer, setbuyer] = useState(initialValues);
  const { clear, items, onRemove } = useContext(CartContext);

  const total = items.reduce((acumulador, valorActual) => acumulador + (valorActual.quantity * valorActual.price),
     0
     );

  const handleChange = (event) => {
    setbuyer(buyer => {
        return {
            ...buyer,
           [event.target.name]: event.target.value,
        };
    });
  };

  const sendOrder = (ev) => {
    ev.preventDefault();

    const order = {
        buyer,
        items,
        total: 13600,
      };
  
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
  
      addDoc(orderCollection, order).then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
          setbuyer(initialValues);
          clear();
        }
      });
    
  };

  return (
    <Container className="mt-4">
      <h1>CARRITO</h1>
      <Table striped="columns">
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>CANTIDAD</th>
            <th>IMAGEN</th>
            <th>PRECIO</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>
                <img src={item.pictureUrl} width={300}></img>
              </td>
              <td>${item.price}</td>
              <td onClick={() => onRemove(item.id)}>Descartar</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
                <td>TOTAL:{total}</td>
            </tr>
        </tfoot>
      </Table>
      <button onClick={clear}>Vaciar carrito</button>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>EMAIL:</Form.Label>
          <Form.Control type="email" required value={buyer.email} onChange={handleChange} name="email"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>NAME:</Form.Label>
          <Form.Control type="text" required value={buyer.name} onChange={handleChange} name="name"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>PHONE:</Form.Label>
          <Form.Control type="text"  required  value={buyer.phone} onChange={handleChange}name="phone" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendOrder}>ENVIAR</Button>
      </Form>
    </Container>
  );
};
