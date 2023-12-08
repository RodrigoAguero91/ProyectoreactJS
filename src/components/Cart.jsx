import { useContext, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const [buyer, setbuyer] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const { clear, items, onRemove } = useContext(CartContext);

  const handleChange = (event) => {
    setbuyer(buyer => {
        return {
            ...buyer,
           [event.target.name]: event.target.value,
        };
    });
  }

  return (
    <Container className="mt-4">
      <h1>CARRITO</h1>
      <Table striped="columns">
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>PRECIO</th>
            <th>IMAGEN</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <img src={item.pictureUrl} width={300}></img>
              </td>
              <td onClick={() => onRemove(item.id)}>Descartar</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={clear}>Vaciar carrito</button>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>EMAIL:</Form.Label>
          <Form.Control type="email" value={buyer.email} onChange={handleChange} name="email"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>NAME:</Form.Label>
          <Form.Control type="text" value={buyer.name} onChange={handleChange} name="name"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>PHONE:</Form.Label>
          <Form.Control type="text" value={buyer.phone} onChange={handleChange}name="phone" />
        </Form.Group>

        <Button variant="primary">ENVIAR</Button>
      </Form>
    </Container>
  );
};
