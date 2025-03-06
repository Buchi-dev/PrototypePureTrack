import React from 'react';
import { List, Card, Badge, Switch, Typography, Tag, Space, Button, Tabs, Select } from 'antd';
import {
  BellOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  DeleteOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'Filter Change Required Soon',
      description: 'Your water filter will need to be changed in 45 days.',
      type: 'warning',
      date: '2024-02-15',
      read: false,
      location: 'Main Building - 1st Floor Cafeteria',
    },
    {
      id: 2,
      title: 'Water Quality Alert',
      description: 'Water quality has dropped below 90%. Consider checking the filter.',
      type: 'alert',
      date: '2024-02-14',
      read: true,
      location: 'Science Building - 2nd Floor Chemistry Lab',
    },
    {
      id: 3,
      title: 'Maintenance Completed',
      description: 'Regular filter maintenance has been completed successfully.',
      type: 'success',
      date: '2024-02-10',
      read: true,
      location: 'Main Building - 2nd Floor Library',
    },
    {
      id: 4,
      title: 'System Update',
      description: 'PureTrack system has been updated to version 2.1.0',
      type: 'info',
      date: '2024-02-05',
      read: true,
      location: 'All Locations',
    },
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'mb-1f', label: 'Main Building - 1st Floor' },
    { value: 'mb-2f', label: 'Main Building - 2nd Floor' },
    { value: 'sb-2f', label: 'Science Building - 2nd Floor' },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'warning':
        return <WarningOutlined style={{ color: '#faad14' }} />;
      case 'alert':
        return <WarningOutlined style={{ color: '#ff4d4f' }} />;
      case 'success':
        return <CheckCircleOutlined style={{ color: '#52c41a' }} />;
      case 'info':
        return <InfoCircleOutlined style={{ color: '#1890ff' }} />;
      default:
        return <BellOutlined />;
    }
  };

  const NotificationsList = () => (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Text>Filter by Location:</Text>
        <Select
          defaultValue="all"
          style={{ width: 240 }}
          options={locations}
        />
      </Space>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="text" icon={<DeleteOutlined />} danger />
            ]}
          >
            <List.Item.Meta
              avatar={getNotificationIcon(item.type)}
              title={
                <Space>
                  {!item.read && <Badge status="processing" />}
                  <Text strong>{item.title}</Text>
                  <Tag color={item.type === 'alert' ? 'error' : 'default'}>
                    {item.type.toUpperCase()}
                  </Tag>
                </Space>
              }
              description={
                <>
                  <Text>{item.description}</Text>
                  <br />
                  <Space>
                    <EnvironmentOutlined />
                    <Text type="secondary">{item.location}</Text>
                    <Text type="secondary">•</Text>
                    <Text type="secondary">{item.date}</Text>
                  </Space>
                </>
              }
            />
          </List.Item>
        )}
      />
    </>
  );

  const NotificationSettings = () => (
    <List
      itemLayout="horizontal"
      dataSource={[
        { title: 'Push Notifications', description: 'Receive push notifications on your device' },
        { title: 'Email Notifications', description: 'Receive email alerts for important updates' },
        { title: 'Maintenance Alerts', description: 'Get notified about upcoming maintenance' },
        { title: 'Water Quality Alerts', description: 'Receive alerts when water quality changes' },
        { title: 'System Updates', description: 'Get notified about system updates and changes' },
        { title: 'Critical Alerts', description: 'Receive immediate notifications for critical issues' },
      ]}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Switch defaultChecked />
          ]}
        >
          <List.Item.Meta
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );

  const items = [
    {
      key: '1',
      label: 'All Notifications',
      children: <NotificationsList />,
    },
    {
      key: '2',
      label: 'Settings',
      children: <NotificationSettings />,
    },
  ];

  return (
    <div>
      <Title level={2}>Notifications</Title>
      <Card>
        <Tabs items={items} />
      </Card>
    </div>
  );
};

export default Notifications; 