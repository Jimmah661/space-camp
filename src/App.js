import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard, BannerImage, Footer, PageNavBar } from './components';

function App() {
  return (
    <>
    <Container fluid id='mainpageContainer'>
        <PageNavBar style={{position: 'absolute', zIndex: 5, top: 0}}/>
      <BannerImage />
      <Row xs={1} sm={2} md={3}>
        <Col className='mainpageColumn'>
          <ProductCard />
        </Col>
        <Col className='mainpageColumn'>
          <ProductCard />
        </Col>
        <Col className='mainpageColumn'>
          <ProductCard />
        </Col>
      </Row>
      <h2>Latest Blog posts</h2>
      <Row xs={1} sm={2} md={3}>
        <Col className='mainpageColumn'>
          <ProductCard />
        </Col>
        <Col className='mainpageColumn'>
          <ProductCard />
        </Col>
        <Col className='mainpageColumn'>
          <ProductCard />
        </Col>
      </Row>
    </Container>
      <Footer />
      </>
  );
}

export default App;
