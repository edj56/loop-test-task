import React from 'react';
import { Layout } from 'antd';

import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">Calculator</div>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Calculator ©2020 Created by Sobotnyk Eduard</Footer>
  </Layout>
);

export default App;
