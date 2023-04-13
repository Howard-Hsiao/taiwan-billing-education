import React from 'react';
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

export default function TimeLine({timepoints, time, setTimeIdx}) {
  
  let marks: SliderMarks = {};
  for (var i = 0; i < timepoints.length; i++){
    marks[timepoints[i]] = timepoints[i];
  }

  return (
    <Slider marks={marks} step={null} value={time} 
      style={{"margin": '0'}}
      trackStyle={{"backgroundColor": "rgb(53, 20, 13)"}} 
      handleStyle={{"backgroundColor": "red", "borderColor": "black"}}
      railStyle={{"backgroundColor": "rgb(190, 142, 99)"}}
      onChange={
      newValue => setTimeIdx(timepoints.indexOf(newValue) ) 
    }/>
  );
}

// const marks: SliderMarks = {
//   0: '0°C',
//   26: '26°C',
//   37: '37°C',
//   100: {
//     style: {
//       color: '#f50',
//     },
//     label: <strong>100°C</strong>,
//   },
// };