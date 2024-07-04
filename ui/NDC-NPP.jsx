'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import TextUi from './Text';
import GraphContainer from './GraphContainer';

const data = [
    
    {
        "region": "",
        "NDC": 0,
        "NPP": 0,
        "percent": 0
    },
    {
        "region": "Greater Accra",
        "NDC": 4000,
        "NPP": 2400,
        "percent": 60
    },
    {
        "region": "Ashanti",
        "NDC": 5000,
        "NPP": 3000,
        "percent": 60
    },
    {
        "region": "Bono",
        "NDC": 2000,
        "NPP": 1200,
        "percent": 60
    },
    {
        "region": "Bono East",
        "NDC": 3000,
        "NPP": 1800,
        "percent": 60
    },
    {
        "region": "Ahafo",
        "NDC": 1500,
        "NPP": 900,
        "percent": 60
    },
    {
        "region": "Central",
        "NDC": 3500,
        "NPP": 2100,
        "percent": 60
    },
    {
        "region": "Eastern",
        "NDC": 4500,
        "NPP": 2700,
        "percent": 60
    },
    {
        "region": "Northern",
        "NDC": 4000,
        "NPP": 2400,
        "percent": 60
    },
    {
        "region": "Savannah",
        "NDC": 1000,
        "NPP": 600,
        "percent": 60
    },
    {
        "region": "North East",
        "NDC": 1200,
        "NPP": 720,
        "percent": 60
    },
    {
        "region": "Upper East",
        "NDC": 2200,
        "NPP": 1320,
        "percent": 60
    },
    {
        "region": "Upper West",
        "NDC": 1800,
        "NPP": 1080,
        "percent": 60
    },
    {
        "region": "Volta",
        "NDC": 2500,
        "NPP": 1500,
        "percent": 60
    },
    {
        "region": "Oti",
        "NDC": 1100,
        "NPP": 660,
        "percent": 60
    },
    {
        "region": "Western",
        "NDC": 3700,
        "NPP": 2220,
        "percent": 60
    },
    {
        "region": "Western North",
        "NDC": 1300,
        "NPP": 780,
        "percent": 60
    }
    ,
    {
        "region": "",
        "NDC": 0,
        "NPP": 0,
        "percent": 0
    },
  ]
const cardinal = curveCardinal.tension(0.2);

export default class NDC_NPP extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy';

  render() {
    return (
       <GraphContainer title={"NDC&NPP"} subtitle={"This graphs shows only NDC and NPP scores accross the whole region."}>
            <AreaChart width={1100} height={300} data={data}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0C8D43" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#C1EBD3" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/> ,
      <stop offset="95%" stopColor="#93c5fd" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="region" angle={45}/>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <Tooltip />
  <Area dot={{r:4}} activeDot={{ r: 8 }} type="monotone" dataKey="NDC" stroke="#08612E" fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
  <Area dot={{r:4}} type="monotone" dataKey="NPP" stroke="#1e40af" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
       </GraphContainer>
    );
  }
}
