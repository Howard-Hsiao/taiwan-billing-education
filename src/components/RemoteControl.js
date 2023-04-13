import React  from 'react';
import Button from '@mui/material/Button';
import voteData from '../assets/data/election_vote.json';

const channelList = Object.keys(voteData);

const buttonStyle = {
  "backgroundColor": "rgb(53, 20, 13)", 
  "color": "white", 
  "width": "50%", 
  "borderRadius": "50px"
}

export default function RemoteControl({setTimeIdx, setChannel}) {  
  return (
    <div className='remote-control'>
      {
        channelList.map(channelName =>
          <Button type="primary" style={buttonStyle}
            onClick={event => {
              setTimeIdx(0);
              setChannel(channelName);
            }}
            key={channelName}>{channelName}</Button>
        )
      }
    </div>
  );
}