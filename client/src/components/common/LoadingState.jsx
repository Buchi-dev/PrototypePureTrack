import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingState = ({ tip = 'Loading...' }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      padding: '40px'
    }}>
      <Spin 
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} 
        tip={tip}
      />
    </div>
  );
};

export default LoadingState; 