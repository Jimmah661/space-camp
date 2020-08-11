import React from 'react';
import {Button, Container, Row, Col, InputGroup, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './test.css'

const Footer = () => {
  return(
    <Container className="footerContainer" fluid>
      <Row>
        <Col>
          <ul id='socialIconsList'>
            <li className='socialIconsSingle'>Facebook</li>
            <li className='socialIconsSingle'>Instagram</li>
            <li className='socialIconsSingle'>Twitter</li>
          </ul>
        </Col>
        <Col>
          <ul style={styles.list}>
            <li>Shop</li>
            <li>Science</li>
            <li>Projects</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Stockists</li>
          </ul>
        </Col>
        <Col>
          <h4 style={{float: 'left'}}>Join our mailing List</h4>
          <OverlayTrigger
            key={'top'}
            placement={'top'}
            overlay={
              <Tooltip id={'email-tooltip'}>
                <p>Your privacy is important to us, we will never supply, sell or trade your information to other parties, we just want to tell you about the cool stuff we're doing</p>
              </Tooltip>
            }
          >
            <i class="fas fa-info-circle"></i>
          </OverlayTrigger>
          <InputGroup>
            <FormControl aria-label="Your contact email" placeholder="Space-Camp@PlanetEarth.com.au" />
            <InputGroup.Append>
              <Button variant="outline-secondary">Join</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

const styles = {
  footerContainer: {
    padding: '40px',
    marginHorizontal: '0'
  },

  list: {
    listStyle: 'none'
  },
}

export default Footer;
