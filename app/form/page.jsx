'use client';
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
    console.log(formData);
    console.log(tk)
    if(
        !formData.accessories ||
        !formData.battery_level ||
        !formData.box_number ||
        !formData.brand ||
        !formData.district ||
        !formData.functionality ||
        !formData.model ||
        !formData.region ||
        !formData.screen ||
        !formData.serial_number ||
        !formData.status ||
        !formData.touch_capability 

    ){
        try {
            let data = formData 
            data.added_username = user.email
            console.log(data)
          const res = await Axios.post(`${URI}/add`, data);
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
            <InputUi label="Region" select  onChange={handleChange} name='region' options={[
              {value: '', text: 'Select Region'},
              {value: 'Western', text: 'Western'},
              {value: 'Eastern', text: 'Eastern'},
              {value: 'Ashanti', text: 'Ashanti'},
              {value: 'Northen', text: 'Northen'},
              {value: 'Central', text: 'Central'},
              {value: 'Greater Accra', text: 'Greater Accra'},
            ]}/>
          </div>
          <div className='col'>
            <InputUi label="District" name='district'  onChange={handleChange} select options={
              formData.region =='Western' ?
              [
                  {value: '', text: 'Select District' 
                } ,
                {value: 'STMA-Takoradi', text: 'STMA-Takoradi' },
                {value: 'STMA-Secondi', text: 'STMA-Secondi' },
                {value: 'STMA-Essiko', text: 'STMA-Essiko' },
              ]
              : formData.region == 'Central'  ?
              [
                  {value: '', text: 'Select District' },
                  {value: 'CCMA-Cape Coast South', text: 'CCMA-Cape Coast South' },
                  {value: 'CCMA-Cape Coast North', text: 'CCMA-Cape Coast North' },
              ] 
        
              : formData.region == 'Greater Accra'  ?
              [
                  {value: '', text: 'Select District' },
                  {value: 'AMA-Ablekuma South', text: 'AMA-Ablekuma South' },
                  {value: 'AMA-Ashiedu Keteke', text: 'AMA-Ashiedu Keteke' },
                  {value: 'AMA-Okaikoi South', text: 'AMA-Okaikoi South' },
                  {value: 'TMA-Tema Central', text: 'TMA-Tema Central' },
                  {value: 'TMA-Tema East', text: 'TMA-Tema East' },
              ] 
        
              : formData.region == 'Ashanti'  ?
              [
                  {value: '', text: 'Select District' },
                  {value: 'KMA-Nhyiaeso', text: 'KMA-Nhyiaeso' },
                  {value: 'KMA-Subin', text: 'KMA-Subin' },
                  {value: 'KMA-Manhyia South', text: 'KMA-Manhyia South' },
                  {value: 'KMA-Manhyia North', text: 'KMA-Manhyia North' },
                  {value: 'KMA-Bantama', text: 'KMA-Bantama' },
              ] 
        
              : formData.region == 'Northen'  ?
              [
                  {value: '', text: 'Select District' },
                  {value: 'TMA-Tamale South', text: 'TMA-Tamale South' },
                  {value: 'TMA-Tamale Central', text: 'TMA-Tamale Central' }
              ] 
        
              :       [
                  {value: '', text: 'Select Regon' },
              ] 
            }/>
          </div>

        </RowFlexUi>
        <SectionUI gap={2} />

      <div>
      <InputUi label="Box Number"  onChange={handleChange} name='box_number'  hint={"*******"}/>
      </div>
    
        <SectionUI gap={2} />
          <div >
            <TextUi text='Brand' block funcss='margin-bottom-10 margin-top-20' bold color='primary'/>
            <RowFlexUi gap={2} >
            <RowFlexUi gap={0.5}>
                        <input
                        className='width-30 height-30'
                            type="radio"
                            name="brand"
                            value="Samsung"
                            checked={formData.brand === 'Samsung'}
                            onChange={handleChange}
                        /> Samsung
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                        className='width-30 height-30'
                            type="radio"
                            name="brand"
                            value="Huawei"
                            checked={formData.brand === 'Huawei'}
                            onChange={handleChange}
                        /> Huawei
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                        className='width-30 height-30'
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
              {value: 'SM-T295NZKAACR', text: 'SM-T295NZKAACR'},
              {value: 'KOB-L09', text: 'KOB-L09'},
              {value: 'BIO-WOLF C', text: 'BIO-WOLF C'},
            ]}/>
          </div>
          <div className='col'>
            <InputUi label="Serial Number" />
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
                            className='width-30 height-30'
                            type="radio"
                            name="screen"
                            value="No cracks"
                            checked={formData.screen === 'No cracks'}
                            onChange={handleChange}
                        /> No cracks
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-30 height-30'
                            type="radio"
                            name="screen"
                            value="Slightly cracked"
                            checked={formData.screen === 'Slightly cracked'}
                            onChange={handleChange}
                        /> Slightly cracked
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-30 height-30'
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
                            className='width-30 height-30'
                            type="radio"
                            name="functionality"
                            value="Functioning"
                            checked={formData.functionality === 'Functioning'}
                            onChange={handleChange}
                        /> Functioning
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-30 height-30'
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
                            className='width-30 height-30'
                            type="radio"
                            name="touch_capability"
                            value="Good"
                            checked={formData.touch_capability === 'Good'}
                            onChange={handleChange}
                        /> Good
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-30 height-30'
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
                            className='width-30 height-30'
                            type="radio"
                            name="accessories"
                            value="Only head"
                            checked={formData.accessories === 'Only head'}
                            onChange={handleChange}
                        /> Only Head
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-30 height-30'
                            type="radio"
                            name="accessories"
                            value="Only cable"
                            checked={formData.accessories === 'Only cable'}
                            onChange={handleChange}
                        /> Only cable
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-30 height-30'
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
                            className='width-30 height-30'
                            type="radio"
                            name="status"
                            value="Good"
                            checked={formData.status === 'Good'}
                            onChange={handleChange}
                        /> Good
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-30 height-30'
                            type="radio"
                            name="status"
                            value="Not good"
                            checked={formData.status === 'Not good'}
                            onChange={handleChange}
                        /> Not good
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
