import React from 'react';
import { Select, Space, Typography, Badge } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

const { Title } = Typography;

const FountainSelector = ({ onSelect }) => {
  // Mock data for fountains
  const locations = [
    {
      label: 'Main Building',
      options: [
        { value: 'mb-1f-01', label: '1st Floor - Cafeteria', status: 'success' },
        { value: 'mb-2f-01', label: '2nd Floor - Library', status: 'warning' },
        { value: 'mb-3f-01', label: '3rd Floor - Hallway', status: 'success' },
      ],
    },
    {
      label: 'Science Building',
      options: [
        { value: 'sb-1f-01', label: '1st Floor - Lab Wing', status: 'success' },
        { value: 'sb-2f-01', label: '2nd Floor - Chemistry Lab', status: 'error' },
      ],
    },
    {
      label: 'Sports Complex',
      options: [
        { value: 'sc-1f-01', label: 'Gymnasium', status: 'success' },
        { value: 'sc-1f-02', label: 'Pool Area', status: 'warning' },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'green';
      case 'warning':
        return 'gold';
      case 'error':
        return 'red';
      default:
        return 'default';
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%', marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <EnvironmentOutlined />
        <Title level={5} style={{ margin: 0 }}>Select Water Fountain</Title>
      </div>
      <Select
        defaultValue="mb-1f-01"
        style={{ width: '100%' }}
        onChange={onSelect}
        options={locations.map(location => ({
          label: location.label,
          options: location.options.map(option => ({
            value: option.value,
            label: (
              <Space>
                <Badge status={getStatusColor(option.status)} />
                {option.label}
              </Space>
            )
          }))
        }))}
      />
    </Space>
  );
};

export default FountainSelector; 