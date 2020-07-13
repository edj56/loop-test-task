import React from 'react';
import { Layout, Statistic, Form, Button, InputNumber, notification } from 'antd';

import service from './service';

import './App.css';

const { Header, Content, Footer } = Layout;


const App = () => {
  const [calculates, setCalculates] = React.useState([]);

  const onFinish = values => {
    const items = Object.entries(values)
      .filter(([, value]) => !!value)
      .map(([type, value]) => ({ type, value }));

    service.calculate({ items }).then(response => {
      if (response.data.success) {
        setCalculates(response.data.calculations);
      } else {
        notification.error({
          message: response.data.message
        })
      }
    });
  };

  const getData = type => {
    const item = calculates.find(item => item.type === type);
    return (item && item.value) || 0;
  }

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo">Calculator</div>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: '0 50px', marginTop: 64, display: 'flex', justifyContent: 'center' }}>
          <Statistic title="Electricity" value={getData('electricity')} style={{ marginRight: 24 }} />
          <Statistic title="Natural Gas" value={getData('naturalGas')} style={{ marginRight: 24 }} />
          <Statistic title="Fuel Oil" value={getData('fuelOil')} style={{ marginRight: 24 }} />
          <Statistic title="LPG" value={getData('LPG')} style={{ marginRight: 24 }} />
          <Statistic title="Water" value={getData('water')} style={{ marginRight: 24 }} />
        </div>
  
        <Form
          style={{ marginTop: 32, justifyContent: 'center' }}
          name="calc"
          layout="inline"
          onFinish={onFinish}
        >
          <Form.Item
            label="Electricity"
            name="electricity"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Natural Gas"
            name="naturalGas"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Fuel Oil"
            name="fuelOil"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="LPG"
            name="LPG"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Water"
            name="water"
          >
            <InputNumber />
          </Form.Item>
  
          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>Calculator ©2020 Created by Sobotnyk Eduard</Footer>
    </Layout>
  );
};

export default App;
