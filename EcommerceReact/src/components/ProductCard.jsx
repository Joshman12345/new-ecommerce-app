import { Col, Button, Card } from "react-bootstrap";

//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

const ProductCard = ({ productDetail }) => {
  const { image, title, description } = productDetail;
  return (
    <Col md={3}>
      <Card className="mb-3">
        <Card.Img variant="top" src= { image } className="img-fluid" style={{ height: '250px' }}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
                {description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
