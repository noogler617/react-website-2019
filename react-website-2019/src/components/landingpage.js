import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img src="https://external-preview.redd.it/rc-eT1150M_U35EUVHaJxaWXRSze4ekXbfoK1wonKh0.gif?format=mp4&s=26721f3cfbf3909eb1515c5b716a2340281744d9"
           alt="milky way" />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
