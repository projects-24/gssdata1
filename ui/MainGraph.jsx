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
    { label: 'Greater Accra', y: 500,  },
    { label: 'Ashanti', y: 400,  },
    { label: 'Western', y: 330,},
    { label: 'Eastern', y: 30,},
    { label: 'Central', y: 300, },
    { label: 'Volta', y: 200, },
    { label: 'Bono', y: 300,  }
]



export default class MainChart extends PureComponent {

  render() {
    return (
    <GraphContainer 
    title='All Devices' subtitle="This graphs shows all devices collected from all over the regions"
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
