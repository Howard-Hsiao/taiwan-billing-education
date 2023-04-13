import { Column } from '@ant-design/plots';
import MyColorPalettes from "../assets/color_palette.json";

export default function AnalysisBarChart({ data, style }){
    const config = {
        data,
        isGroup: true,
        xField: 'party',
        yField: 'vote',
        seriesField: 'name',

        /** 设置颜色 */
        color: [MyColorPalettes["standard"][3], MyColorPalettes["standard"][2], MyColorPalettes["standard"][4]],

        /** 设置间距 */
        // marginRatio: 0.1,
        label: {
        // 可手动配置 label 数据标签位置
        position: 'top',
        // 'top', 'middle', 'bottom'
        // 可配置附加的布局方法
        layout: [
            // 柱形图数据标签位置自动调整
            {
            type: 'interval-adjust-position',
            }, // 数据标签防遮挡
            {
            type: 'interval-hide-overlap',
            }, // 数据标签文颜色自动调整
            {
            type: 'adjust-color',
            },
        ],
        },
    };

    return <div style={style}><Column {...config} /></div>;
}