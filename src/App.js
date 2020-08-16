import React, {useState} from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ProductCard, BannerImage, Footer, PageNavBar, CheckoutDrawer } from './components';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <>
      <Container fluid id='mainpageContainer'>
        {/* CheckoutDrawer component will pop open when a user adds a product or if the click on the cart icon 
        From this they can proceed to the checkout and make their payment */}
        <CheckoutDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>

        {/* The Navebar will be fixed at the top of the screen, Will contain the links to the different pages on the site */}
        <PageNavBar style={{position: 'absolute', zIndex: 5, top: 0}}/>

        {/* This image will underlie the PageNavBar element.  */}
        <BannerImage />

        {/* This is the beginning of the products listed on the site. */}
        <Row xs={1}>
          <Col style={{paddingLeft: 64, marginTop: 16, marginBottom: 16}}>
            <h2>Our Products</h2>
          </Col>
        </Row>
        <Button onClick={() => setDrawerOpen(!drawerOpen)}>Toggle Drawer</Button>
        <Row xs={1} sm={2} md={3}>
          <Col className='mainpageColumn'>
            <ProductCard dataId={1}/>
          </Col>
          <Col className='mainpageColumn'>
            <ProductCard dataId={2}/>
          </Col>
          <Col className='mainpageColumn'>
            <ProductCard dataId={3}/>
          </Col>
        </Row>

        {/* This is the beginning of the latest blog posts */}
        <Row xs={1}>
          <Col style={{paddingLeft: 64, marginTop: 16, marginBottom: 16}}>
            <h2>Latest blog posts</h2>
          </Col>
        </Row>
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

      {/* The footed component will contain all the data from the footer of the page. */}
      <Footer />
    </>
  );
}

export default App;
