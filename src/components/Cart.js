import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, ListGroup, Container } from "react-bootstrap";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cart.map((item, index) => (
          <ListGroup.Item key={index}>
            {item.title} - ${item.price}
            <Button variant="danger" onClick={() => removeFromCart(item.title)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Cart;
