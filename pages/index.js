import React, { useState, useEffect } from 'react';
import styles from '../styles/index.less';
import PageHeader from '../components/PageHeader';
import request from '../utils/request';
import List from '../components/List';

export default () => {
  const [data, setData] = useState({ title: '', list: [] });
  useEffect(() => {
    const getData = async () => {
      return await request({
        url: '/static/data/data.json',
      });
    };
    getData().then((result) => {
      if (result.result === 0) {
        setData(result.data);
      } else {
        console.log(result.msg);
      }
    });
  }, []);
  return (
    <div className={styles.main}>
      <PageHeader />
      <div className={styles.pageTitle}>前端面试基础篇</div>
      <div>
        <List data={data} />
      </div>
    </div>
  );
};
