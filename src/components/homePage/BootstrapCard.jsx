import PropTypes from "prop-types"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BootstrapCard = ({ product }) => {
  return (
    <Card style={{ width: '18rem', display: 'grid' }} className="m-2">
      <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

BootstrapCard.propTypes = {
   product: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number({
      toFixed: PropTypes.func
    }),
    title: PropTypes.string
  })
}

export default BootstrapCard;
