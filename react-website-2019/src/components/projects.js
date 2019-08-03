import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};

    if(this.state.activeTab === 1) {
      return(<div><h1>This is React</h1></div>)
    }
    if(this.state.activeTab === 2) {
      return(<div><h1>This is MongoDB</h1></div>)
    }
    if(this.state.activeTab === 3) {
      return(<div><h1>This is Python</h1></div>)
    }
    if(this.state.activeTab === 4) {
      return(<div><h1>This is Raspberry Pi</h1></div>)
    }

  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
        <Tab>React</Tab>
        <Tab>MongoDB</Tab>
        <Tab>Python</Tab>
        <Tab>Raspberry Pi</Tab>
        </Tabs>


      </div>
    )
  }
}

export default Projects;
