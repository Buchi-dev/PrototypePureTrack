import React, { useState } from 'react';
import { Row, Col, Card, Timeline, Button, Typography, Tag, Descriptions, Space, Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  ToolOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import FountainSelector from './FountainSelector';

const { Title, Text } = Typography;

const FilterStatus = () => {
  const [selectedFountain, setSelectedFountain] = useState('mb-1f-01');

  // Mock data for the performance chart
  const performanceData = Array.from({ length: 30 }, (_, i) => ({
    date: `2024-02-${String(i + 1).padStart(2, '0')}`,
    efficiency: 95 - Math.random() * 10,
    flowRate: 2.5 + Math.random() * 0.5,
  }));

  // Mock data for all fountains status
  const fountainStatuses = [
    {
      key: 'mb-1f-01',
      location: 'Main Building - 1st Floor Cafeteria',
      health: 90,
      nextMaintenance: '45 days',
      status: 'Operational',
      lastChecked: '2024-02-15',
    },
    {
      key: 'mb-2f-01',
      location: 'Main Building - 2nd Floor Library',
      health: 75,
      nextMaintenance: '15 days',
      status: 'Needs Attention',
      lastChecked: '2024-02-14',
    },
    {
      key: 'sb-2f-01',
      location: 'Science Building - 2nd Floor',
      health: 45,
      nextMaintenance: 'Immediate',
      status: 'Critical',
      lastChecked: '2024-02-13',
    },
  ];

  const columns = [
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Health',
      dataIndex: 'health',
      key: 'health',
      render: (health) => {
        let color = health > 80 ? 'success' : health > 60 ? 'warning' : 'error';
        return <Tag color={color}>{health}%</Tag>;
      },
    },
    {
      title: 'Next Maintenance',
      dataIndex: 'nextMaintenance',
      key: 'nextMaintenance',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Operational' ? 'success' : 
                   status === 'Needs Attention' ? 'warning' : 'error';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Last Checked',
      dataIndex: 'lastChecked',
      key: 'lastChecked',
    },
  ];

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Title level={2}>Filter Status</Title>
        <Space>
          <Button type="primary" icon={<ToolOutlined />}>
            Add Fountain
          </Button>
          
          <Button type="primary" icon={<ToolOutlined />}>
            Schedule Maintenance
          </Button>

          <Button icon={<WarningOutlined />}>
            Report Issue
          </Button>
        </Space>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="All Fountains Status">
            <Table 
              dataSource={fountainStatuses} 
              columns={columns} 
              pagination={false}
            />
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <FountainSelector onSelect={setSelectedFountain} />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="Filter Performance">
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={performanceData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" domain={[80, 100]} />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
                  <Tooltip />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="efficiency"
                    stroke="#1890ff"
                    name="Efficiency (%)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="flowRate"
                    stroke="#52c41a"
                    name="Flow Rate (L/min)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Descriptions title="Current Status" column={1}>
              <Descriptions.Item label="Filter Health">
                <Tag color="success" icon={<CheckCircleOutlined />}>
                  Good Condition
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Installation Date">
                2024-01-01
              </Descriptions.Item>
              <Descriptions.Item label="Next Maintenance">
                <Tag color="warning" icon={<ClockCircleOutlined />}>
                  In 45 days
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Lifetime">
                90 days remaining
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="Maintenance History">
            <Timeline
              items={[
                {
                  color: 'green',
                  children: (
                    <>
                      <Text strong>Filter Replaced</Text>
                      <br />
                      <Text type="secondary">2024-01-01 - Regular maintenance</Text>
                    </>
                  ),
                },
                {
                  color: 'blue',
                  children: (
                    <>
                      <Text strong>Performance Check</Text>
                      <br />
                      <Text type="secondary">2023-12-15 - All parameters normal</Text>
                    </>
                  ),
                },
                {
                  color: 'yellow',
                  children: (
                    <>
                      <Text strong>Flow Rate Warning</Text>
                      <br />
                      <Text type="secondary">2023-12-10 - Flow rate decreased to 2.1 L/min</Text>
                    </>
                  ),
                },
                {
                  color: 'green',
                  children: (
                    <>
                      <Text strong>Filter Replaced</Text>
                      <br />
                      <Text type="secondary">2023-10-01 - Regular maintenance</Text>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FilterStatus; 