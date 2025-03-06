import React from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  Switch,
  Select,
  TimePicker,
  Typography,
  Divider,
  Row,
  Col,
  InputNumber,
  Space,
} from 'antd';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  BellOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const Settings = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div>
      <Title level={2}>Settings</Title>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="User Profile">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                name: 'John Doe',
                email: 'john@example.com',
                phone: '+1 234 567 8900',
                language: 'en',
              }}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input prefix={<UserOutlined />} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Please input your email!' },
                      { type: 'email', message: 'Please enter a valid email!' },
                    ]}
                  >
                    <Input prefix={<MailOutlined />} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="Phone Number"
                  >
                    <Input prefix={<PhoneOutlined />} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="language"
                    label="Language"
                  >
                    <Select>
                      <Option value="en">English</Option>
                      <Option value="es">Spanish</Option>
                      <Option value="fr">French</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Divider />

              <Title level={4}>Filter Settings</Title>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="maintenanceInterval"
                    label="Maintenance Interval (days)"
                    initialValue={90}
                  >
                    <InputNumber min={30} max={180} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="alertThreshold"
                    label="Quality Alert Threshold (%)"
                    initialValue={90}
                  >
                    <InputNumber min={0} max={100} />
                  </Form.Item>
                </Col>
              </Row>

              <Divider />

              <Title level={4}>Notification Preferences</Title>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="dailyReport"
                    label="Daily Report"
                    valuePropName="checked"
                    initialValue={true}
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="reportTime"
                    label="Report Time"
                    initialValue={null}
                  >
                    <TimePicker format="HH:mm" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Save Changes
                  </Button>
                  <Button>
                    Reset
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="System Information">
            <p><strong>Version:</strong> 2.1.0</p>
            <p><strong>Last Updated:</strong> 2024-02-15</p>
            <p><strong>Device ID:</strong> PT-001-ABC</p>
            <Divider />
            <Button icon={<SettingOutlined />} block>
              Check for Updates
            </Button>
            <Button icon={<BellOutlined />} block style={{ marginTop: 8 }}>
              Test Notifications
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Settings; 