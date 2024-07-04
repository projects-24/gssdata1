// 'use client';
// import React, { useEffect, useState } from 'react'
// import CanvasJSReact from '@canvasjs/charts';

// import RowFlex from "funuicss/ui/specials/RowFlex"
// import Text from "funuicss/ui/text/Text"
// import TextUi from './Text';
// import SectionUI from './section';
// function MainChart({data}) {

 
//     useEffect(() => {

//         var chart = new CanvasJSReact.Chart("chartContainer", {
//             animationEnabled: true,
//             theme: "light2", // "light1", "light2", "dark1", "dark2"
//             title: {
//                 text: " "
//             },
//             axisY: {
//                 title: "",
//             },
//             axisX: {
//                 title: "Regions"
//             },
//             data: [{
//                 type: "column",
        
//                 dataPoints: data
//             }]
//         });
//         chart.render();
//     }, []);



//     return (
//         <div className='margin-top-40 card roundEdgeSmall padding-20'>
//             <TextUi text="All Paties" size='big' bold color='dark300' />
//             <SectionUI gap={2}/>
//             <div id={"chartContainer"} style={{ height: '250px', width: '100%' }}></div>
//             <Grid funcss="padding bt central">

//                 {
//                     data.map(( doc) => (
//                       <div className="padding" key={doc.label}>
//                           <div className='card padding roundEdgeSmall' >
//                             <Text text={doc.y ? doc.y : doc.x ? doc.x : doc.y} bold/>
//                             <Text text={doc.label} block size="minified"/>
//                         </div>
//                       </div>
//                     ))
//                 }
                
//             </Grid>
//         </div>
//     )
// }

// export default MainChart

'use client'
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import TextUi from './Text';
import GraphContainer from './GraphContainer';
import Grid from "funuicss/ui/grid/Grid"
import Col from "funuicss/ui/grid/Col"
import RowFlexUi from './RowFlex';
import AnimationUi from './Animation';



let all_paties = [
    {
        "label": "NDC",
        "y": 500,
        "fill": "#E95263"  // Original dark green
    },
    {
        "label": "NPP",
        "y": 400,
        "fill": "#3b82f6"  // Slightly lighter green
    },
    {
        "label": "APC",
        "y": 330,
        "fill": "#33BE65"  // Lighter green
    },
    {
        "label": "CPP",
        "y": 30,
        "fill": "#4CD777"  // Even lighter green
    },
    {
        "label": "DFP",
        "y": 300,
        "fill": "#66F089"  // Light green
    },
    {
        "label": "DPP",
        "y": 300,
        "fill": "#80F99A"  // Very light green
    },
    {
        "label": "EGLE",
        "y": 200,
        "fill": "#99FFAC"  // Lighter green
    },
    {
        "label": "PNC",
        "y": 350,
        "fill": "#B2FFBD"  // Lighter green
    },
    {
        "label": "LPG",
        "y": 30,
        "fill": "#CCFFCF"  // Lighter green
    },
    {
        "label": "NDP",
        "y": 300,
        "fill": "#E5FFE0"  // Very light green
    }
]



export default class MainChart extends PureComponent {

  render() {
    return (
    <GraphContainer 
    title='All Parties' subtitle="This graphs shows parties in the election and the score in each region."
    bottom={
            <RowFlexUi justify='center' responsiveMedium>

                {
                    all_paties.map(( doc) => (
                      <div className="padding col" key={doc.label}>
                         <AnimationUi animation='fade-down'> 
                            <div className='card hover-up  padding roundEdgeSmall' style={{borderRight:`0.5rem solid ${doc.fill}`}}>
                            <TextUi text={doc.y ? doc.y : doc.x ? doc.x : doc.y} bold heading="h3"/>
                            <TextUi text={doc.label} block size="minified"/>
                        </div>
                        </AnimationUi>
                      </div>
                    ))
                }
                
            </RowFlexUi>
    }
    >
          <BarChart
          width={1100}
          height={300}
          data={all_paties}
         >
          <XAxis dataKey="label" />
          <Tooltip />
          <Bar dataKey="y" fill="#82ca9d"  />
        </BarChart>
    </GraphContainer>
    //             <Grid funcss="padding bt central">

//                 {
//                     data.map(( doc) => (
//                       <div className="padding" key={doc.label}>
//                           <div className='card padding roundEdgeSmall' >
//                             <Text text={doc.y ? doc.y : doc.x ? doc.x : doc.y} bold/>
//                             <Text text={doc.label} block size="minified"/>
//                         </div>
//                       </div>
//                     ))
//                 }
                
//             </Grid>
    );
  }
}
