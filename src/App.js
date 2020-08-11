import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard, BannerImage, Footer } from './components';

function App() {
  return (
    <>
    <Container fluid>
      <BannerImage />
      <Row xs={1} sm={2} md={3}>
        <Col >
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
      </Row>
      <h2>Latest Blog posts</h2>
      <Row xs={1} sm={2} md={3}>
        <Col >
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
        <Col>
          <ProductCard />
        </Col>
      </Row>
    </Container>
      <Footer />
      </>
  );
}

export default App;
