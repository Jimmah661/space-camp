import React from 'react';
import {Drawer} from '../utilities';
import { Button } from 'react-bootstrap';

const CheckoutDrawer = ({drawerOpen, setDrawerOpen}) => {
  return (
  <Drawer open={drawerOpen} openClose={() => setDrawerOpen(!drawerOpen)}>
    <h1>Cart</h1>
    <p>Your cart is empty</p>
    <Button onClick={() => setDrawerOpen(!drawerOpen)}>Close Drawer</Button>
  </Drawer>
)
}

export default CheckoutDrawer;
