'use client'
import React, { useState } from 'react'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import TextUi from '@/ui/Text'
import SectionUI from '@/ui/section'
import RowFlexUi from '@/ui/RowFlex'
import InputUi from '@/ui/input'
import UiButton from '@/ui/button'
import { PiPaperPlane } from 'react-icons/pi'
import Link from 'next/link'
export default function Home() {
  const [formData, setFormData] = useState({
    boxNumber: '',
    region: '',
    district: '',
    brand: '',
    model: '',
    serialNumber: '',
    physicalInspection: '',
    screen: '',
    functionality: '',
    touch: '',
    accessories: '',
    battery: '',
    status: ''
});



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

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send to API)
};
  return (
    <FullCenteredPage funcss='padding-top-80'>
      <div className="width-400-max fit padding">
        <div className="">
            <TextUi text="Login Account" size='big' block/>
            <TextUi text="Make sure to enter all details to continue" color='dark400'/>
            </div>
            <form onSubmit={handleSubmit}>
        <SectionUI gap={4} />
      <div>
      <InputUi label="Email"  onChange={handleChange} name='email'  hint={"username@gmail.com"}/>
      </div>
        <SectionUI gap={2} />
      <div>
      <InputUi label="Password" type={'password'}  onChange={handleChange} name='password'  hint={"*******"}/>
      </div>
      
            <SectionUI gap={3}>
              <Link href={'/form'}>
            <UiButton text="Login Account" fullWidth bg='primary' raised bold rounded endIcon={<PiPaperPlane />} />
              </Link>
            </SectionUI>
        </form>
      </div>
    </FullCenteredPage>
  )
}
