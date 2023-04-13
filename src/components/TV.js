import React from 'react';
import VoteBarChart from './VoteBarChart.js';

export default function TV({vote}) {  

  return (
    <div className='TV'>
      <VoteBarChart data={vote}></VoteBarChart>
    </div>
  );
}