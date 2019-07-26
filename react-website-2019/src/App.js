import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header title="Ryan Mills" scroll>
                <Navigation>
                    <a href="/about">About Me</a>
                    <a href="/projects">Projects</a>
                    <a href="/myBlog">Blog</a>
                    <a href="/contact">Contact</a>
                </Navigation>
            </Header>
            <Drawer title="Ryan Mills">
                <Navigation>
                  <a href="/about">About Me</a>
                  <a href="/projects">Projects</a>
                  <a href="/myBlog">Blog</a>
                  <a href="/contact">Contact</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
    </div>

  );
}

export default App;
