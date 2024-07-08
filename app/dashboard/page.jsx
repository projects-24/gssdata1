import Accessories from '@/page_components/Accessories'
import Brand from '@/page_components/Brand'
import ClientFunctioning from '@/page_components/ClientFunctioning'
import ClientGraph from '@/page_components/ClientGraph'
import ClientTouch from '@/page_components/ClientTouch'
import ClientScreen from '@/page_components/Screen'
import Status from '@/page_components/status'
import AnimationUi from '@/ui/Animation'
import Content from '@/ui/Content'
import NavBar from '@/ui/NavBar'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import React from 'react'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'
import Link from 'next/link'

export default function Dasboard() {
  return (
    <div>
        <NavBar />
        <div className="_side _card">
        <List gap={0.5}>
            <ListItem>
              <Link href={"/dashboard#all"}>All Devices</Link>
            </ListItem>
            <ListItem>
            <Link href={"/dashboard#functioning"}>Functionality</Link>
            </ListItem>
            <ListItem>
            <Link href={"/dashboard#accessories"}>Accessories</Link>
            </ListItem>
            <ListItem>
            <Link href={"/dashboard#devicebrand"}>Brand</Link>
            </ListItem>
            <ListItem>
            <Link href={"/dashboard#touch_capability"}>Touch</Link>
            </ListItem>
            <ListItem>
            <Link href={"/dashboard#devicescreen"}>Screen</Link>
            </ListItem>
            <ListItem>
            <Link href={"/dashboard#status_chart"}>Status</Link>
            </ListItem>
            </List>
        </div>
        <div className='_dashboard_content'>
           <div>
              <div>
                <TextUi text='Dashboard' heading='h1' bold/>
                <TextUi text='Check general statistics and other analytics.'/>
            </div>
            <AnimationUi>
            <ClientGraph />
            </AnimationUi>
            <AnimationUi>
            <ClientFunctioning />
            </AnimationUi>
            <AnimationUi>
            <Accessories />
            </AnimationUi>
            <AnimationUi>
            <Brand />
            </AnimationUi>
            <AnimationUi>
            <ClientTouch />
            </AnimationUi>
            <AnimationUi>
            <ClientScreen />
            </AnimationUi>
            <AnimationUi>
            <Status />
            </AnimationUi>
              </div>
        </div>
    </div>
  )
}
