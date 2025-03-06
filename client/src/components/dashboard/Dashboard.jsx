import React, { useState } from 'react';
import { Row, Col, Card, Progress, Statistic, Typography, Alert } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CheckCircleOutlined, WarningOutlined, AlertOutlined } from '@ant-design/icons';
import RecentActivity from './RecentActivity';
import FountainSelector from './FountainSelector';

const { Title } = Typography;

const Dashboard = () => {
  const [selectedFountain, setSelectedFountain] = useState('mb-1f-01');

  // Mock data for the water quality chart
  const waterQualityData = [
    { date: '2024-01-01', quality: 95, average: 92 },
    { date: '2024-01-02', quality: 93, average: 92 },
    { date: '2024-01-03', quality: 94, average: 93 },
    { date: '2024-01-04', quality: 92, average: 91 },
    { date: '2024-01-05', quality: 90, average: 90 },
    { date: '2024-01-06', quality: 91, average: 91 },
    { date: '2024-01-07', quality: 89, average: 90 },
  ];

  // Mock data for system overview
  const systemOverview = {
    totalFountains: 8,
    activeFountains: 7,
    warningFountains: 2,
    errorFountains: 1,
  };

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Title level={2}>System Overview</Title>
      </Row>

      

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Fountains"
              value={systemOverview.totalFountains}
              prefix={<AlertOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Fountains"
              value={systemOverview.activeFountains}
              prefix={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Need Attention"
              value={systemOverview.warningFountains}
              prefix={<WarningOutlined style={{ color: '#faad14' }} />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Critical Issues"
              value={systemOverview.errorFountains}
              prefix={<AlertOutlined style={{ color: '#ff4d4f' }} />}
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
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Filter Health"
              value={90}
              suffix="%"
              prefix={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
            />
            <Progress percent={90} status="active" strokeColor="#52c41a" />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Days Until Change"
              value={45}
              suffix="days"
              prefix={<WarningOutlined style={{ color: '#faad14' }} />}
            />
            <Progress percent={55} status="active" strokeColor="#faad14" />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Water Flow Rate"
              value={2.5}
              suffix="L/min"
            />
            <Progress percent={75} status="active" />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Filtered"
              value={1250}
              suffix="L"
            />
            <Progress percent={62} status="active" />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} lg={16}>
          <Card title="Water Quality Trend">
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={waterQualityData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="quality"
                    name="Selected Fountain"
                    stroke="#1890ff"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="average"
                    name="System Average"
                    stroke="#52c41a"
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <RecentActivity />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 