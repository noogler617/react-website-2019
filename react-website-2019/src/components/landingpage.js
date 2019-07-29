import React, { Component } from 'react';
//import { Grid, Cell } from 'react-mdl';




class Landing extends Component {
  render() {
    return(
      <div>
      <video autoPlay loop
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          src="https://res.cloudinary.com/dlyhbsnfb/video/upload/v1564364034/milky-way/milky_way_dlopql.mp4"
        />
        <div class="banner-text">
          <h1>Full Stack Web Developer</h1>
        </div>
      </div>
    );
  }
}

export default Landing;
