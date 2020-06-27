import React, { useState, useEffect } from 'react';
import styles from '../styles/index.less';
import PageHeader from '../components/PageHeader';
import request from '../utils/request';

export default () => {
  useEffect(() => {
    const getData = async () => {
      return await request({
        url: '/static/data/data.json',
      });
    };
    const data = getData();
    console.log(data)
  }, []);
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.pageTitle}>前端面试基础篇</div>
      <img src='/static/logo.png' alt='' />
    </div>
  );
};
