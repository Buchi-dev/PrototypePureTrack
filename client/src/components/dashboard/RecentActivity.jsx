import React from 'react';
import { Timeline, Card, Typography, Tag } from 'antd';
import {
  CheckCircleOutlined,
  WarningOutlined,
  InfoCircleOutlined,
  ToolOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const RecentActivity = () => {
  const activities = [
    {
      type: 'success',
      title: 'Filter Maintenance',
      description: 'Regular maintenance completed',
      time: '2 hours ago',
      icon: <ToolOutlined />,
    },
    {
      type: 'warning',
      title: 'Flow Rate Alert',
      description: 'Flow rate decreased to 2.1 L/min',
      time: '5 hours ago',
      icon: <WarningOutlined />,
    },
    {
      type: 'info',
      title: 'Quality Check',
      description: 'Water quality at 95%',
      time: '1 day ago',
      icon: <InfoCircleOutlined />,
    },
    {
      type: 'success',
      title: 'System Check',
      description: 'All parameters normal',
      time: '2 days ago',
      icon: <CheckCircleOutlined />,
    },
  ];

  const getTimelineColor = (type) => {
    switch (type) {
      case 'success':
        return 'green';
      case 'warning':
        return 'orange';
      case 'info':
        return 'blue';
      default:
        return 'blue';
    }
  };

  return (
    <Card title="Recent Activity">
      <Timeline
        items={activities.map(activity => ({
          color: getTimelineColor(activity.type),
          dot: activity.icon,
          children: (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text strong>{activity.title}</Text>
                <Tag color={activity.type === 'warning' ? 'warning' : 'default'}>
                  {activity.time}
                </Tag>
              </div>
              <Text type="secondary">{activity.description}</Text>
            </>
          ),
        }))}
      />
    </Card>
  );
};

export default RecentActivity; 