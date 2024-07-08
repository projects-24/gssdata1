'use client'
import React, { useEffect, useState } from 'react'
import AppBar from 'funuicss/ui/appbar/AppBar'
import Logo from './Logo'
import { PiChartBar, PiChartDonut, PiDeviceMobile, PiHouse, PiList, PiListDuotone, PiPhone, PiProjectorScreen, PiTrendUp, PiUserPlus } from 'react-icons/pi'
import RowFlexUi from './RowFlex'
import Link from 'next/link'
import TextUi from './Text'
import { GetToken } from '@/functions/Auth'

export default function NavBar() {
  const [user, setuser] = useState()
  useEffect(() => {
    GetToken()
    .then((res) => {
      setuser(res.user)
    })
  }, [])
  
  return <AppBar 
  funcss='card height-70 '
  fixedTop
  left={<TextUi text="Tablet Retrieval system" heading='h4' bold color='dark400'/>}
  center={<RowFlexUi gap={2}>
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
    <PiDeviceMobile /> <TextUi text="Form" size='smaller' bold color='dark300' uppercase/>    
    </RowFlexUi> 
    </Link>
    {/* <Link href={'/data'}>
   <RowFlexUi gap={0.2}>
   <PiChartBar /> <TextUi text="Statistics" size='smaller' bold color='dark300' uppercase/> 
   </RowFlexUi> 
    </Link> */}
  </RowFlexUi>}
  right={<div>
    <TextUi text={user ? user.fullname : ''}  block />
    <TextUi text={user ? user.level : ''} bold size='small' />
  </div>}
  />
}
