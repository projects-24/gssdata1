'use client';
import React, { useState, useLayoutEffect } from 'react';
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import TextUi from '@/ui/Text';
import SectionUI from '@/ui/section';
import RowFlexUi from '@/ui/RowFlex';
import InputUi from '@/ui/input';
import UiButton from '@/ui/button';
import { PiPaperPlane } from 'react-icons/pi';
import Link from 'next/link';
import LoaderUi from '@/ui/LoaderUi';
import AlertUi from '@/ui/Alert';
import Axios from 'axios';
import { URI } from '@/functions/uri';
import { SaveToken } from '@/functions/Auth';

export default function Home() {
    const [formData, setFormData] = useState({
        password: '',
        email: '',
    });

    const [message, setmessage] = useState('');
    const [alert_state, setalert_state] = useState(false);
    const [is_loading, setis_loading] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            setmessage('');
            setalert_state(false);
        }, 2000);
    }, [alert_state, message]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setmessage('Please fill all fields');
            setalert_state('error');
        } else {
            setalert_state(false);
            setis_loading(true);
            try {
                const res = await Axios.post(URI + '/login', formData);
                setis_loading(false);
                setmessage('Logged in successfully');
                setalert_state('success');
                let user , token 
                token = res.data.token
                user = res.data.users 

                SaveToken(user, token)

            } catch (err) {
                setis_loading(false);
                setmessage('Failed to login');
                setalert_state('error');
                console.log(err);
            }
        }
    };

    return (
        <FullCenteredPage funcss='padding-top-80'>
            {is_loading && <LoaderUi />}
            {alert_state && <AlertUi message={message} success={alert_state === 'success'} />}
            <div className="width-400-max fit padding-20">
               <div className="">
               <div>
                    <TextUi text="Login Account" heading='h1' bold block />
                    <TextUi text="Enter the correct email and password to continue" color='dark400' />
                </div>
                <form onSubmit={handleSubmit}>
                    <SectionUI gap={4} />
                    <div>
                        <InputUi label="Email" onChange={handleChange} name='email' hint="username@gmail.com" />
                    </div>
                    <SectionUI gap={2} />
                    <div>
                        <InputUi label="Password" type='password' onChange={handleChange} name='password' hint="*******" />
                    </div>
                    <SectionUI gap={3}>
                        <UiButton text="Login Account" fullWidth bg='primary' raised bold rounded endIcon={<PiPaperPlane />} />
                    </SectionUI>
                </form>
               </div>
            </div>
        </FullCenteredPage>
    );
}
