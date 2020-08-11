import React from 'react';
import {Jumbotron, Image} from 'react-bootstrap'
import PageNavBar from './PageNavBar';

const BannerImage = () => {
  return (
    <Jumbotron fluid>
      <PageNavBar style={{position: 'absolute', zIndex: 5, top: 0}}/>
        <Image src="https://via.placeholder.com/728x90.png?text=Space+Camp,+Good+skin+by+interesting+organisms" style={{width: '100%', height: '100%'}} fluid />
    </Jumbotron>
  )
}

export default BannerImage;