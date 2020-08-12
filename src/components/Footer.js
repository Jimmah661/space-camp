import React from 'react';
import {Button, Container, Row, Col, InputGroup, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './test.css'

const Footer = () => {
  return(
    <Container className="footerContainer" fluid>
      <Row>
        <Col>
          <ul id='socialIconsList'>
            <li className='socialIconsSingle'><i className="fab fa-facebook fa-2x"></i></li>
            <li className='socialIconsSingle'><i className="fab fa-instagram fa-2x"></i></li>
            <li className='socialIconsSingle'><i className="fab fa-twitter fa-2x"></i></li>
          </ul>
        </Col>
        <Col>
          <ul style={styles.list}>
            {
              ['Shop', 'Science','Projects', 'FAQs', 'Contact', 'Stockists'].map((link) => {
                return (
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="footerLink">{link}</a>
                  </li>
                )
              })
            }
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
