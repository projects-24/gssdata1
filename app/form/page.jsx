

'use client'
import React, { useState } from 'react'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import TextUi from '@/ui/Text'
import SectionUI from '@/ui/section'
import RowFlexUi from '@/ui/RowFlex'
import InputUi from '@/ui/input'
import UiButton from '@/ui/button'
import { PiPaperPlane } from 'react-icons/pi'
import NavBar from '@/ui/NavBar'
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
    <div>
        <NavBar />
        <FullCenteredPage funcss='padding-top-80'>
      <div className="width-600-max fit padding">
        <div className="">
            <TextUi text="Welcome" size='big' block/>
            <TextUi text="Make sure to enter all details to continue" color='dark400'/>
            </div>
            <div>
        <SectionUI gap={4} />

      <div>
      <InputUi label="Box Number"  onChange={handleChange} name='box_number'  hint={"*******"}/>
      </div>
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
            <InputUi label="Battery%"  onChange={handleChange} name='battery' type='number'/>
          </div>
        </RowFlexUi>
        <SectionUI gap={2} />
        <RowFlexUi responsiveSmall gap={1}>
          <div className='col'>
            <InputUi label="Region" select  onChange={handleChange} name='region' options={[
              {value: '', text: 'Select Region'},
              {value: 'Western', text: 'Western'},
              {value: 'Eastern', text: 'Eastern'},
            ]}/>
          </div>
          <div className='col'>
            <InputUi label="District" name='district'  onChange={handleChange} select options={
              formData.region =='Western' ?
              [
                  {value: '', text: 'Select District' 
                } ,
                {value: 'Jomoro Municipal', text: 'Jomoro Municipal' },
                {value: 'Ellembelle', text: 'Ellembelle' },
                {value: 'Nzema East Municipal', text: 'Nzema East Municipal' },
                {value: 'Ahanta West Municipal', text: 'Ahanta West Municipal' },
                {value: 'Effia Kwesimintsim Municipal', text: 'Effia Kwesimintsim Municipal' },
              ]
              : formData.region == 'Eastern'  ?
              [
                  {value: '', text: 'Select District' },
                  {value: 'Akuapim South', text: 'Akuapim South' },
                  {value: 'Asuogyaman', text: 'Asuogyaman' },
                  {value: 'Birim Central', text: 'Birim Central' },
                  {value: 'Birim South', text: 'Birim South' },
                  {value: 'Denkyembour', text: 'Denkyembour' },
              ] 
        
              :       [
                  {value: '', text: 'Select Regon' },
              ] 
            }/>
          </div>

        </RowFlexUi>
        <SectionUI gap={2} />
          <div >
            <InputUi label="Serial Number" />
          </div>
        <SectionUI gap={2} />
          <div >
            <TextUi text='Physical inspection' block funcss='margin-bottom-10 margin-top-20' bold color='primary'/>
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
                            name="touch"
                            value="Good"
                            checked={formData.touch === 'Good'}
                            onChange={handleChange}
                        /> Good
                    </RowFlexUi>
                    <RowFlexUi gap={0.5}>
                        <input
                            className='width-30 height-30'
                            type="radio"
                            name="touch"
                            value="Not good"
                            checked={formData.touch === 'Not good'}
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
            <UiButton text="Submit" bg='primary' raised bold rounded endIcon={<PiPaperPlane />} />
            </SectionUI>
        </div>
      </div>
    </FullCenteredPage>
    </div>
  )
}
