import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src="https://via.placeholder.com/286x180.png"/>
        <Card.Body>
          <Card.Title>Test Card</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac blandit diam.
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default ProductCard;