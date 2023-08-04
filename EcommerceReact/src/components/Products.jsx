import { useEffect, useState } from "react";
import { get } from "../Services/ApiCalls";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const resp = get("products");
    resp.then((result) => setProducts(result?.data));
  }, []);



  return (
    <>
      <Container>
        <Row>
        <h2>Products</h2>
          {products?.length > 0 ? (
            <>
              {products?.map((product, index) => (
                <ProductCard key={product.id} productDetail={product}/>
              ))}
            </>
          ) : (
            <p>Loading or there is an error...</p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Products;
