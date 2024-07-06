'use client'
import SectionUI from '@/ui/section'
import React from 'react'
import TableUI from '@/ui/Table'
import Card from 'funuicss/ui/card/Card'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import UiButton from '@/ui/button'
import CircleUi from '@/ui/Circle'
import { PiPen, PiPrinter, PiTrash } from 'react-icons/pi'
import NavBar from '@/ui/NavBar'
export default function Data() {
      const data = [
        {
            serial: 3004994940383,
            username: 'Ahmed Salim Adam',
            region: 'Upper West Region',
            district: 'Wa Municipal',
            condition: 'Health condition data'
        },
        {
            serial: 3004994940384,
            username: 'Amina Bello',
            region: 'Greater Accra Region',
            district: 'Accra Metropolitan',
            condition: 'General check-up data'
        },
        {
            serial: 3004994940385,
            username: 'Yaw Mensah',
            region: 'Ashanti Region',
            district: 'Kumasi Metropolitan',
            condition: 'Chronic disease data'
        },
        {
            serial: 3004994940386,
            username: 'Fatima Abubakar',
            region: 'Northern Region',
            district: 'Tamale Metropolitan',
            condition: 'Health condition data'
        },
        {
            serial: 3004994940387,
            username: 'Kofi Owusu',
            region: 'Eastern Region',
            district: 'Koforidua',
            condition: 'Health condition data'
        },
        {
            serial: 3004994940388,
            username: 'Abena Asiedu',
            region: 'Central Region',
            district: 'Cape Coast',
            condition: 'Routine check-up data'
        },
        {
            serial: 3004994940389,
            username: 'Isaac Nii Armah',
            region: 'Western Region',
            district: 'Sekondi-Takoradi',
            condition: 'Surgery follow-up data'
        },
        {
            serial: 3004994940390,
            username: 'Kwabena Agyeman',
            region: 'Volta Region',
            district: 'Ho Municipal',
            condition: 'Health condition data'
        },
        {
            serial: 3004994940391,
            username: 'Mariam Alhassan',
            region: 'Brong-Ahafo Region',
            district: 'Sunyani Municipal',
            condition: 'Health condition data'
        },
        {
            serial: 3004994940392,
            username: 'Ama Darko',
            region: 'Upper East Region',
            district: 'Bolgatanga',
            condition: 'Routine check-up data'
        }
    ];

    const Edit = (doc) => {
    }
    const Delete = (doc) => {
    }
    const Print = (doc) => {
    }
    
  return (
    <div className='padding-top-90 padding-bottom-20'>
      <NavBar />
        <div className="container">
            <h1 className='h1 text-bold'>Data</h1>
            <p>This is where you will see all the collected data.</p>
            <SectionUI gap={4} />
            <Card 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          funcss='text-small'
          filterableFields={['region', 'district']}
          data={{
            "data": data,
            "titles": ["Serial Number", "Username", "Region", "District", "Condition", 'Edit', 'Delete', 'Print'],
            "fields": ["serial", "username", "region", "district", "condition"],
          }}
          customColumns={[
            {
                title: 'Actions',
                render: (data) => (
               <CircleUi bg='primary' onClick={() => Edit(data)} size={2}>
                <PiPen />
               </CircleUi>
                ),
              },
            {
                title: 'Actions',
                render: (data) => (
               <CircleUi bg='error' onClick={() => Edit(Delete)} size={2}>
                <PiTrash />
               </CircleUi>
                ),
              },
            {
                title: 'Actions',
                render: (data) => (
               <CircleUi bg='success' onClick={() => Print(data)} size={2}>
                <PiPrinter />
               </CircleUi>
                ),
              }
          ]}
          />
          }
          />
        </div>
    </div>
  )
}
