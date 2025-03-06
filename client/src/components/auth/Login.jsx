import React from 'react';
import { Card, Form, Input, Button, Typography, Divider, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Mock login - in real app, this would call an API
    if (values.username === 'demo' && values.password === 'demo123') {
      localStorage.setItem('isAuthenticated', 'true');
      message.success('Login successful!');
      navigate('/dashboard');
    } else {
      message.error('Invalid credentials! Try demo/demo123');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f2f5'
    }}>
      <Card style={{ width: 400, padding: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Title level={2} style={{ margin: 0 }}>PureTrack</Title>
          <Text type="secondary">Water Filter Monitoring System</Text>
        </div>
        
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ username: 'demo' }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Username" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Log in
            </Button>
          </Form.Item>

          <Divider>Demo Credentials</Divider>
          <Text type="secondary">
            Username: demo<br />
            Password: demo123
          </Text>
        </Form>
      </Card>
    </div>
  );
};

export default Login; 