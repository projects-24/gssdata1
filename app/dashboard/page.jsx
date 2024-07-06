import ClientFunctioning from '@/page_components/ClientFunctioning'
import ClientGraph from '@/page_components/ClientGraph'
import Content from '@/ui/Content'
import NavBar from '@/ui/NavBar'
import TextUi from '@/ui/Text'
import React from 'react'

export default function Dasboard() {
  return (
    <div>
        <NavBar />
        <Content>
            <div>
                <TextUi text='Dashboard' heading='h1' bold/>
                <TextUi text='Check general statistics and other analytics.'/>
            </div>
            <ClientGraph />
            <ClientFunctioning />
        </Content>
    </div>
  )
}
