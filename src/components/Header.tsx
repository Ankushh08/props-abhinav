import React from 'react';
import { Layout, Typography } from 'antd';
import styles from '../styles/Header.module.css';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  return (
    <AntHeader className={styles.header}>
      <Title level={2} className={styles.title}>
        Properties By Abhinav!
      </Title>
    </AntHeader>
  );
};

export default Header;