import React from 'react'
import AppBar from 'funuicss/ui/appbar/AppBar'
import Logo from './Logo'
import { PiChartBar, PiChartDonut, PiHouse, PiList, PiListDuotone, PiProjectorScreen, PiTrendUp } from 'react-icons/pi'
import RowFlexUi from './RowFlex'
import Link from 'next/link'
import TextUi from './Text'

export default function NavBar() {
  return <AppBar 
  funcss='card height-70'
  fixedTop
  left={<TextUi text="GSS"/>}
  center={<RowFlexUi gap={2}>
    <Link href={'/'}>
    <RowFlexUi gap={0.2}> 
    <PiHouse /> <TextUi text="Home" size='smaller' bold color='dark300' uppercase/>    
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
