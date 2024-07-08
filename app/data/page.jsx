'use client'
import SectionUI from '@/ui/section'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import TableUI from '@/ui/Table'
import Card from 'funuicss/ui/card/Card'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import UiButton from '@/ui/button'
import CircleUi from '@/ui/Circle'
import { PiChecks, PiPen, PiPrinter, PiTrash } from 'react-icons/pi'
import NavBar from '@/ui/NavBar'
import Modal from 'funuicss/ui/modal/Modal'
import Text from 'funuicss/ui/text/Text'
import Circle from 'funuicss/ui/specials/Circle'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Button from 'funuicss/ui/button/Button'
import { URI } from '@/functions/uri'
import Axios  from 'axios'
import LoaderUi from '@/ui/LoaderUi'
import AlertUi from '@/ui/Alert'
import InputUi from '@/ui/input'
import { GetToken } from '@/functions/Auth';
import { regions } from '@/functions/get_regions';
import {FunGet} from 'funuicss/js/Fun'
export default function Data() {
  const [delete_id, setdelete_id] = useState('')
  const [message, setMessage] = useState('');
  const [alertState, setAlertState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setdata] = useState([])
  const [edit_id, setedit_id] = useState('')
  const [edit_doc, setedit_doc] = useState('')
  const [tk, settk] = useState('')

  useEffect(() => {
    GetToken()
    .then(res => {
      settk(res.token)
    })
  }, [])
  


  const [formData, setFormData] = useState({
    box_number: '',
    region: '',
    district: '',
    brand: '',
    model: '',
    serial_number: '',
    // screen: '',
    // functionality: '',
    // touch_capability: '',
    // accessories: '',
    // battery_level: '',
    // status: ''
  });

  const [selected_region, setselected_region] = useState('')

  useLayoutEffect(() => {
    setTimeout(() => {
      setMessage('');
      setAlertState(false);
    }, 2000);
  }, [alertState, message]);

  useEffect(() => {
    Axios.get(URI + '/all' )
    .then(res => {
      setdata(res.data)
    })
    .catch(err => console.log(err))
    
  }, [])
  
      
    const Edit = (doc) => {
      setedit_id(doc.asset_id)
      setselected_region(doc.region)
      setedit_doc(doc)
    }
    const Delete = (doc) => {
      setdelete_id(doc.asset_id)
    }
    const Print = (doc) => {
      window.location.assign('/print/' + doc.asset_id)
    }

    const confirmDelete = () => {
      setIsLoading(true)
      Axios.delete(URI + '/delete/' + delete_id )
     .then(res => {
      setAlertState(success)
      setMessage('Deleted successfully')
      window.location.reload()
      setIsLoading(false)
     })
     .catch(err => {
        setAlertState('err')
        // setMessage('Failed to delete')
        window.location.reload()
        setIsLoading(false)
        setdelete_id('')
      })
    }
    

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      let serial_number , region , district , model, box_number, battery_level, accessories 
      serial_number = FunGet.val('#serial_number');
      region = FunGet.val('#region');
      district = FunGet.val('#district');
      model = FunGet.val('#model');
      box_number = FunGet.val('#box_number');
      battery_level = FunGet.val('#battery_level');
      accessories = FunGet.val('#accessories');

      let data = formData
      data.region = selected_region
      data.brand = edit_doc.brand
      data.functionality = edit_doc.functionality
      data.screen = edit_doc.screen
      data.touch_capability = edit_doc.touch_capability
      data.accessories = edit_doc.accessories
      data.battery_level = edit_doc.battery_level
      data.status = edit_doc.status
      data.accessories = edit_doc.accessories
      data.battery_level = battery_level
      data.box_number = box_number
      data.model = model
      data.district = district
      Date.region = region 
      data.serial_number = serial_number

      console.log(data)
      console.log(tk)
      if(
          formData.accessories ||
          formData.battery_level ||
          formData.box_number ||
          // formData.brand ||
          formData.district ||
          // formData.functionality ||
          formData.model ||
          formData.region ||
          // formData.screen ||
          formData.serial_number
          // formData.status ||
          // formData.touch_capability 
  
      ){
          try {
            const res = await Axios.patch(`${URI}/edit/` + edit_id , data,  {
              headers: {
                Authorization: `Bearer ${tk}`
              }
            });
            setIsLoading(false);
            setMessage(' Data updated successfully');
            setAlertState('success');
            console.log(res);
            setedit_id('')
          } catch (err) {
            setIsLoading(false);
            setMessage('Failed to submit form');
            setAlertState('error');
            console.log(err);
            setedit_id('')
          }
      }else{
          setMessage('Please fill all required fields');
          setAlertState('error');
          setIsLoading(false);
      }
    };

    
  return (
    <div className='padding-top-90 padding-bottom-20'>
        {isLoading && <LoaderUi />}
      {alertState && <AlertUi message={message} success={alertState === 'success'} />}
      
      <Modal

     flat 
     position='left'
     animation='SlideRight'
    open={delete_id ? true : false}
    maxWidth='600px'
    body={
        <RowFlex gap={1}>
        <Circle size={2.5} bg='error'>
            <PiTrash />
        </Circle>
        <div className='bl padding'>
        <Text text='Delete Object' heading='h4' bold color='dark300' />
        <Text size='minified' color="dark200" text='This will delete the object completely from the database' block/>
        </div>
    
        </RowFlex>
    }
    footer={
        <RowFlex gap={1} justify='flex-end' >
            <Button
            text='Cancel'
            small
            raised
            bg='error'
            onClick={() => setdelete_id('')}
            bold
            />
            <Button
            text='Delete'
            small
            raised
            startIcon={<PiTrash />}
            bg='success'
            onClick={confirmDelete}

            bold
            />

    </RowFlex>
    }
    />
      <Modal
     flat 
     title={<TextUi text={`Edit ${edit_doc.serial_number}` } heading='h1' />}
     animation='SlideDown'
    open={edit_id ? true : false}
    maxWidth='600px'
    body={
      <form className='container'>
         <RowFlexUi responsiveSmall gap={1}>
          <div className='col'>
          <TextUi 
    text={`Region`} 
    block 
    size='smaller' 
    uppercase 
    bold 
    color='primary'
    funcss='margin-bottom-10'
    />
            <select defaultValue={edit_doc.region} className='input _input full-width _card roundEdgeSmall borderless '  onChange={(e) => setselected_region(e.target.value)}>
              <option value="">Region</option>
              {
                regions().map((doc) =>(
                  <option key={doc.region} value={doc.region}>{doc.region}</option>
                ))
              }
            </select>
 
          </div>
          <div className='col'>
          <TextUi 
    text={`District`} 
    block 
    size='smaller' 
    uppercase 
    bold 
    color='primary'
    funcss='margin-bottom-10'
    />
          <select defaultValue={edit_doc.district}  id='district' className='input _input full-width _card roundEdgeSmall borderless ' onChange={handleChange}>
              <option value="">District</option>
             {
              selected_region ? 
              <>
                {
                  regions().filter(r => r.region === selected_region)[0].districts.map((doc) =>(
                    <option key={doc} value={doc}>{doc}</option>
                  ))
                }
              </>
              : <></>
             }
            </select>

          </div>

        </RowFlexUi>
        <SectionUI gap={2} />

      <div>
      <InputUi defaultValue={edit_doc.box_number}  label="Box Number"  onChange={handleChange} id='box_number'  hint={"*******"}/>
      </div>
    
          <SectionUI gap={2} />
        
      <SectionUI gap={2} />
      <RowFlexUi responsiveSmall gap={1}>
          <div className='col'>
            <InputUi defaultValue={edit_doc.model}  label="Model"  onChange={handleChange} id='model' select options={[
              {value: '', text: 'Model'},
              {value: 'SM-T295NZKAACR', text: 'SM-T295NZKAACR'},
              {value: 'KOB-L09', text: 'KOB-L09'},
              {value: 'BIO-WOLF C', text: 'BIO-WOLF C'},
            ]}/>
          </div>
          <div className='col'>
            <InputUi defaultValue={edit_doc.serial_number}  label="Serial Number"  id='serial_number' onChange={handleChange}/>
          </div>
        </RowFlexUi>
        <SectionUI gap={2} />
        <div >
        <InputUi defaultValue={edit_doc.battery_level}  label="Battery%"  onChange={handleChange} id='battery_level' type='number'/>
          </div>

      </form>
    }
    footer={
        <RowFlex gap={1} justify='flex-end' >
            <Button
            text='Cancel'
            small
            raised
            bg='error'
            onClick={() => setedit_id('')}
            bold
            />
            <Button
            text='Confirm'
            small
            raised
            startIcon={<PiChecks />}
            bg='primary'
            onClick={handleSubmit}
            bold
            />

    </RowFlex>
    }
    />
      <NavBar />
        <div className="container">
            <h1 className='h1 text-bold'>Data</h1>
            <p>This is where you will see all the collected data.</p>
            <SectionUI gap={4} />
           {
            data.length > 0 ? 
            <Card 
            funcss='roundEdgeSmall padding-20'
            body={
            <TableUI
            funcss='text-smaller'
            filterableFields={['region', 'district', 'model', 'brand' , 'functionality', 'status']}
            pageSize={40}
            data={data ? {
              "data": data,
              "titles": ["Serial Number",'Brand', 'Model', "Added", "Region", "District", "functionality", 'Status', 'Edit', 'Delete',],
              "fields": ["serial_number",'brand', 'model', "added_username", "region", "district", "functionality" , 'status'],
            } : []}
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
                 <CircleUi bg='error' onClick={() => Delete(data)} size={2}>
                  <PiTrash />
                 </CircleUi>
                  ),
                },
              // {
              //     title: 'Actions',
              //     render: (data) => (
              //    <CircleUi bg='success' onClick={() => Print(data)} size={2}>
              //     <PiPrinter />
              //    </CircleUi>
              //     ),
              //   }
            ]}
            />
            }
            />
            : <div className="height-600 skeleton dark700 rpundEdgeSmall"></div>
           }
        </div>
    </div>
  )
}
