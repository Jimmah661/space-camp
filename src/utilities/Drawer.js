import React from 'react';
import './Drawer.css'

const Drawer = ({
  open = false,
  openClose,
  children,
}) => {
  return (
    <>
      <span onClick={openClose} className='screenCover' id={open ? 'screenCoverActive' : 'screenCoverInactive'}></span>
      <div className='drawerComponent' id={open ? 'drawerOpen' : 'drawerClosed'}>
        {children}
      </div>
    </>
  )
}

export default Drawer;
