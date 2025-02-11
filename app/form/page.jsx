'use client'
import React, { useState, useLayoutEffect, useEffect } from 'react';
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import TextUi from '@/ui/Text';
import SectionUI from '@/ui/section';
import RowFlexUi from '@/ui/RowFlex';
import InputUi from '@/ui/input';
import UiButton from '@/ui/button';
import { PiPaperPlane } from 'react-icons/pi';
import NavBar from '@/ui/NavBar';
import AnimationUi from '@/ui/Animation';
import LoaderUi from '@/ui/LoaderUi';
import AlertUi from '@/ui/Alert';
import Axios from 'axios';
import { URI } from '@/functions/uri';
import { GetToken } from '@/functions/Auth';
import { regions } from '@/functions/get_regions';

export default function Home() {
  const [formData, setFormData] = useState({
    box_number: '',
    region: '',
    district: '',
    brand: '',
    model: '',
    serial_number: '',
    screen: '',
    functionality: '',
    touch_capability: '',
    accessories: '',
    battery_level: '',
    status: ''
  });

  const [selected_region, setselected_region] = useState('')

  const [message, setMessage] = useState('');
  const [alertState, setAlertState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setuser] = useState('')
  const [tk, settk] = useState('')

  useEffect(() => {
    GetToken()
    .then(res => {
      setuser(res.user)
      settk(res.token)
    })
  }, [])
  
  useLayoutEffect(() => {
    setTimeout(() => {
      setMessage('');
      setAlertState(false);
    }, 2000);
  }, [alertState, message]);

  const updateDistricts = (selectedRegion) => {
    setFormData({
      ...formData,
      region: selectedRegion,
      district: ''
    });
  };

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
    let data = formData
    data.region = selected_region
    console.log(data)
    console.log(tk)
    if(
        formData.accessories ||
        formData.battery_level ||
        formData.box_number ||
        formData.brand ||
        formData.district ||
        formData.functionality ||
        formData.model ||
        formData.region ||
        formData.screen ||
        formData.serial_number ||
        formData.status ||
        formData.touch_capability 

    ){
        try {
       
          const res = await Axios.post(`${URI}/add`, data,  {
            headers: {
              Authorization: `Bearer ${tk}`
            }
          });
          setIsLoading(false);
          setMessage('Form submitted successfully');
          setAlertState('success');
          console.log(res);
        } catch (err) {
          setIsLoading(false);
          setMessage('Failed to submit form');
          setAlertState('error');
          console.log(err);
        }
    }else{
        setMessage('Please fill all required fields');
        setAlertState('error');
        setIsLoading(false);
    }
  };

  return (
    <div>
        <NavBar />
      {isLoading && <LoaderUi />}
      {alertState && <AlertUi message={message} success={alertState === 'success'} />}
  
      <form >
        <FullCenteredPage funcss='padding-top-80'>
      <div className="width-600-max fit padding">
        <div className="">
            <TextUi text="Welcome" size='big' block/>
            <TextUi text="Make sure to enter all details to continue" color='dark400'/>
            </div>
            <div>
        <SectionUI gap={4} />
  
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
            <select className='input _input full-width _card roundEdgeSmall borderless '  onChange={(e) => setselected_region(e.target.value)}>
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
          <select name='district' className='input _input full-width _card roundEdgeSmall borderless ' onChange={handleChange}>
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
      <InputUi label="Box Number"  type={'number'} onChange={handleChange} name='box_number'  hint={"*******"}/>
      </div>
    
        <SectionUI gap={2} />
          <div >
            <TextUi text='Brand' block funcss='margin-bottom-10 margin-top-20' bold color='primary'/>
            <RowFlexUi gap={2} >
            <RowFlexUi gap={0.5}>
                        <input
                        className='width-20 height-20'
                            type="radio"
                            name="brand"
                            value="Samsung"
                            checked={formData.brand === 'Samsung'}
                            onChange={handleChange}
                        /> Samsung
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                        className='width-20 height-20'
                            type="radio"
                            name="brand"
                            value="Huawei"
                            checked={formData.brand === 'Huawei'}
                            onChange={handleChange}
                        /> Huawei
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                        className='width-20 height-20'
                            type="radio"
                            name="brand"
                            value="Bio-rugged"
                            checked={formData.brand === 'Bio-rugged'}
                            onChange={handleChange}
                        /> Bio-rugged
                    </RowFlexUi>
            </RowFlexUi>
          </div>
          <SectionUI gap={2} />
        
      <SectionUI gap={2} />
      <RowFlexUi responsiveSmall gap={1}>
          <div className='col'>
            <InputUi label="Model"  onChange={handleChange} name='model' select options={[
              {value: '', text: 'Model'},
              {value: 'SM-T295NZKAACR', text: 'SM-T295NZKAACR'},
              {value: 'KOB-L09', text: 'KOB-L09'},
              {value: 'BIO-WOLF C', text: 'BIO-WOLF C'},
            ]}/>
          </div>
          <div className='col'>
            <InputUi label="Serial Number"  name='serial_number' onChange={handleChange}/>
          </div>
        </RowFlexUi>
        <SectionUI gap={2} />
        <div >
        <InputUi label="Battery%"  onChange={handleChange} name='battery_level' type='number'/>
          </div>

            <SectionUI gap={2} />
            <div>
                <TextUi text='Screen' block funcss='margin-bottom-10 margin-top-20' bold color='primary' />
                <RowFlexUi gap={2} funcss='bb padding-bottom-10'>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="screen"
                            value="No cracks"
                            checked={formData.screen === 'No cracks'}
                            onChange={handleChange}
                        /> No cracks
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="screen"
                            value="Slightly cracked"
                            checked={formData.screen === 'Slightly cracked'}
                            onChange={handleChange}
                        /> Slightly cracked
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="screen"
                            value="Deeply cracked"
                            checked={formData.screen === 'Deeply cracked'}
                            onChange={handleChange}
                        /> Deeply cracked
                    </RowFlexUi>
                </RowFlexUi>
            </div>

            <SectionUI gap={2} />
            <div>
                <TextUi text='Functionality' block funcss='margin-bottom-10 margin-top-20' bold color='primary' />
                <RowFlexUi gap={2} funcss='bb padding-bottom-10'>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="functionality"
                            value="Functioning"
                            checked={formData.functionality === 'Functioning'}
                            onChange={handleChange}
                        /> Functioning
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="functionality"
                            value="Not Functioning(Defective)"
                            checked={formData.functionality === 'Not Functioning(Defective)'}
                            onChange={handleChange}
                        /> Not Functioning (Defective)
                    </RowFlexUi>
                </RowFlexUi>
            </div>

            <SectionUI gap={2} />
            <div>
                <TextUi text='Touch' block funcss='margin-bottom-10 margin-top-20' bold color='primary' />
                <RowFlexUi gap={2} funcss='bb padding-bottom-10'>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="touch_capability"
                            value="Good"
                            checked={formData.touch_capability === 'Good'}
                            onChange={handleChange}
                        /> Good
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="touch_capability"
                            value="Not good"
                            checked={formData.touch_capability === 'Not good'}
                            onChange={handleChange}
                        /> Not good
                    </RowFlexUi>
                </RowFlexUi>
            </div>
            <SectionUI gap={2} />
            <div>
                <TextUi text='Accesories' block funcss='margin-bottom-10 margin-top-20' bold color='primary' />
                <RowFlexUi gap={2} funcss='bb padding-bottom-10'>
                
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="accessories"
                            value="Only head"
                            checked={formData.accessories === 'Only head'}
                            onChange={handleChange}
                        /> Only Head
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="accessories"
                            value="Only cable"
                            checked={formData.accessories === 'Only cable'}
                            onChange={handleChange}
                        /> Only cable
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="accessories"
                            value=" Both (complete)"
                            checked={formData.accessories === ' Both (complete)'}
                            onChange={handleChange}
                        />  {`Both (complete)`}
                    </RowFlexUi>
                </RowFlexUi>
            </div>
            <SectionUI gap={2} />
            <div>
                <TextUi text='Status' block funcss='margin-bottom-10 margin-top-20' bold color='primary' />
                <RowFlexUi gap={2} funcss='bb padding-bottom-10'>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="status"
                            value="Active"
                            checked={formData.status === 'Active'}
                            onChange={handleChange}
                        /> Active
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-20 height-20'
                            type="radio"
                            name="status"
                            value="Not Active"
                            checked={formData.status === 'Not Active'}
                            onChange={handleChange}
                        /> Not Active
                    </RowFlexUi>
                </RowFlexUi>
            </div>
            <SectionUI gap={2}>
            <UiButton text="Submit" bg='primary' raised bold rounded endIcon={<PiPaperPlane />} onClick={handleSubmit}/>
            </SectionUI>
        </div>
      </div>
    </FullCenteredPage>
    </form>
    </div>
  )
}
