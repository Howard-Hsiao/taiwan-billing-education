import { Column } from '@ant-design/plots';

const custom_color = {
  "民進黨": "rgb(169, 209, 142)", 
  "國民黨": "rgb(143, 170, 220)", 
  "親民黨": "rgb(244, 177, 131)"
}

export default function StackedBarChart({data, style}){
  const config = {
    data,
    title: { // this is where they set the title
      visible: true,
      text: 'Sales volume of different product categories',
    },
    colorField: 'party', // 部分图表使用 seriesField
    color: ({ party }) => custom_color[party], 
    isStack: true,
    xField: 'channel',
    yField: 'vote',
    seriesField: 'party',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle', // 'top', 'bottom', 'middle'
    },
    interactions: [
      {
        type: 'active-region',
        enable: false,
      },
    ],

    connectedArea: {
      style: (oldStyle, element) => {
        return {
          fill: 'rgba(0,0,0,0.25)',
          stroke: oldStyle.fill,
          lineWidth: 0.5,
        };
      },
    },
  };
  return <div className='a' style={style}><Column {...config}/></div>;
};