'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import TextUi from '@/ui/Text';
import SectionUI from '@/ui/section';
import RowFlexUi from '@/ui/RowFlex';
import InputUi from '@/ui/input';
import UiButton from '@/ui/button';
import { PiPaperPlane } from 'react-icons/pi';
import Link from 'next/link';
import NavBar from '@/ui/NavBar';
import Content from '@/ui/Content';
import AnimationUi from '@/ui/Animation';
import LoaderUi from '@/ui/LoaderUi';
import AlertUi from '@/ui/Alert';
import  Axios  from 'axios';
import { URI } from '@/functions/uri';

export default function Home() {
    const [message, setmessage] = useState('')
    const [alert_state, setalert_state] = useState(false)
    const [is_loading, setis_loading] = useState(false)

    useLayoutEffect(() => {
        setTimeout(() => {
            setmessage('')
            setalert_state(false)
        }, 2000)
    },[alert_state, message])

  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    level: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.email || formData.fullname || formData.level || formData.password){
        setalert_state(false)
        setis_loading(true)
        try {
            setis_loading(true);
            const res = await Axios.post(URI + '/login', formData);
            setis_loading(false);
            setmessage('Account Created successfully');
            setalert_state('success');
            console.log(res)
          } catch (err) {
            setis_loading(false);
            setmessage('Failed to login');
            setalert_state('error');
            console.log(err)
          }
    }else{
        setmessage('Please fill all fields')
        setalert_state('error')
    
    }
  };

  return (
    <div>
        {
        is_loading && <LoaderUi />
        }
        {
            alert_state && <AlertUi message={message} success={alert_state == 'success' ? true : false}/>
        }
        <NavBar />
        <Content>

        <AnimationUi>
      <div className="width-400-max fit center padding">
        <div className="">
          <TextUi text="Register User" size='big' block/>
          <TextUi text="Please enter all details to continue" color='dark400'/>
        </div>
        <form onSubmit={handleSubmit}>
          <SectionUI gap={4} />
          <RowFlexUi gap={1}>
            <div className="col">
            <InputUi label="Email" onChange={handleChange} name='email' hint="username@gmail.com"/>

            </div>
            <div className='col'>
            <InputUi label="Full Name" onChange={handleChange} name='fullname' hint="John Doe"/>
          </div>
          </RowFlexUi>11
 
          <SectionUI gap={2} />
          <div>
            <InputUi select label="Level" onChange={handleChange} name='level'
            options={[
                {'text': 'Select Level', 'value': ''},
                {'text': 'Admin', 'value': 'admin'},
                {'text': 'User', 'value': 'user'},
            ]}
            />
          </div>
          <SectionUI gap={2} />
          <div>
            <InputUi label="Password" type='password' onChange={handleChange} name='password' hint="*******"/>
          </div>
          <SectionUI gap={3}>
            <UiButton text="Register" fullWidth bg='primary' raised bold rounded endIcon={<PiPaperPlane />} />
          </SectionUI>
        </form>
      </div>
    </AnimationUi>
    </Content>

    </div>
  );
}
