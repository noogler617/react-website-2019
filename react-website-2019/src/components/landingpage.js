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
        <div className="banner-text">
          <h1>Full Stack Web Developer</h1>
          <p>HTML/CSS | Javascript | React | Python | NodeJS | MongoDB | MySQL</p>
        </div>
        <div className="social-links">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ryan-k-mills/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        {/* Github*/}
        <a href="https://github.com/noogler617" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-github-square" aria-hidden="true" />
        </a>
        {/* Youtube */}
        <a href="" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-youtube-square" aria-hidden="true" />
        </a>
        </div>
      </div>
    );
  }
}

export default Landing;
