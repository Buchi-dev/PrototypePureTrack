import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  DashboardOutlined,
  FilterOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = theme.useToken();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/filter-status',
      icon: <FilterOutlined />,
      label: 'Filter Status',
    },
    {
      key: '/notifications',
      icon: <BellOutlined />,
      label: 'Notifications',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <div style={{ 
          height: 32, 
          margin: 16, 
          background: token.colorPrimary, 
          borderRadius: token.borderRadius,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
          PureTrack
        </div>
        <Menu
          theme="light"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: 0, 
          background: token.colorBgContainer,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: 24
        }}>
          <UserOutlined style={{ fontSize: 20 }} />
        </Header>
        <Content style={{ margin: '16px' }}>
          <div style={{ 
            padding: 24, 
            minHeight: 360, 
            background: token.colorBgContainer,
            borderRadius: token.borderRadius
          }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 