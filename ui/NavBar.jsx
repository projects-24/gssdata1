import React from 'react'
import AppBar from 'funuicss/ui/appbar/AppBar'
import Logo from './Logo'
import { PiChartBar, PiChartDonut, PiHouse, PiList, PiListDuotone, PiProjectorScreen, PiTrendUp, PiUserPlus } from 'react-icons/pi'
import RowFlexUi from './RowFlex'
import Link from 'next/link'
import TextUi from './Text'

export default function NavBar() {
  return <AppBar 
  funcss='card height-70 '
  fixedTop
  left={<TextUi text="Tablet Retrieval system" heading='h4' bold color='dark400'/>}
  right={<RowFlexUi gap={2}>
    <Link href={'/register'}>
    <RowFlexUi gap={0.2}> 
    <PiUserPlus /> <TextUi text="Register" size='smaller' bold color='dark300' uppercase/>    
    </RowFlexUi> 
    </Link>
    <Link href={'/dashboard'}>
    <RowFlexUi gap={0.2}> 
    <PiChartDonut /> <TextUi text="Dashboard" size='smaller' bold color='dark300' uppercase/>    
    </RowFlexUi> 
    </Link>
    <Link href={'/form'}>
    <RowFlexUi gap={0.2}> 
    <PiHouse /> <TextUi text="Form" size='smaller' bold color='dark300' uppercase/>    
    </RowFlexUi> 
    </Link>
    <Link href={'/data'}>
   <RowFlexUi gap={0.2}>
   <PiChartBar /> <TextUi text="Statistics" size='smaller' bold color='dark300' uppercase/> 
   </RowFlexUi> 
    </Link>
  </RowFlexUi>}
  />
}
