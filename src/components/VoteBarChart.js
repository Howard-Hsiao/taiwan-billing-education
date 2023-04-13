// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const theme = {
  // textColor: '#eee',
  fontSize: '15px'
};

const custom_color = {
  "民進黨": "rgb(169, 209, 142)", 
  "國民黨": "rgb(143, 170, 220)", 
  "親民黨": "rgb(244, 177, 131)"
}

export default function VoteBarChart({ data /* see data tab */ }){
  let voteSum = 0;
  data = data.sort((a, b) => a.vote - b.vote)

  // data.forEach(partyData => {
  //   for (let pk in partyData) {
  //       voteSum += partyData[pk];
  //   }
  // })
  const colorList = data.map(partyData => custom_color[partyData.party])

  return (
    <ResponsiveBar
        labelFormat={v =>`${v} (${v / voteSum}%)`}
        theme={theme}
        data={data}
        keys={['vote']}
        indexBy="party"
        minValue={0}
        maxValue={100}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }} // can control size
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={colorList}
        colorBy="indexValue"
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={{format: '~s'}}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableGridX={true}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        // height="100%"
        // width="100%"
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in party: "+e.indexValue}}
    />
)}