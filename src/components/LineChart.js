import React from 'react';
import { Line } from '@ant-design/plots';
import data from '../assets/data/lineChart.json';

export default function LineChart({style}){
  const config = {
    data, 
    xField: 'time',
    yField: 'vote',
    seriesField: 'channel',
    legend: {
      position: 'right',
    },
    style: {
      fontSize: 60
    },
    
    xAxis: {
      title: {
        text: 'Time', 
        style: {
          fontSize: 16
        },
      }
    }, 
    yAxis: {
      title: {
        text: '開票數',
        style: {
          fontSize: 16
        },
      }
    }, 

    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <div style={style}><Line {...config} /></div>;
};