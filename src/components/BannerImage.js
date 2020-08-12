import React from 'react';
import './bannerImage.css';

const BannerImage = ({children}) => {
  return (
    <div>
      <div id='bannerImage'>
      </div>
      <div className="spacer" />
      {children}
    </div>
  )
}

export default BannerImage;