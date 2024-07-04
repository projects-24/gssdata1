import React from 'react'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import TextUi from '@/ui/Text'
import SectionUI from '@/ui/section'
import RowFlexUi from '@/ui/RowFlex'
import InputUi from '@/ui/input'
import UiButton from '@/ui/button'
import { PiPaperPlane } from 'react-icons/pi'

export default function Home() {
  return (
    <FullCenteredPage>
      <div className="width-600-max fit padding">
        <div className="container">
          <RowFlexUi alignItems='flex-end' gap={2} justify='space-between'>
            <div>
            <TextUi text="Welcome" size='big' block/>
            <TextUi text="Make sure to enter all details to continue" color='dark400'/>
            </div>
            <div>
              <UiButton text="Submit" bg='primary' raised bold rounded endIcon={<PiPaperPlane />} />
            </div>
          </RowFlexUi>
        <SectionUI gap={4} />

      <div>
      <InputUi label="Seriel Number" hint={"*******"}/>
      </div>
      <SectionUI gap={2} />
        <RowFlexUi responsiveSmall gap={1}>
          <div className='col'>
            <InputUi label="username" hint={"Enter a username"}/>
          </div>
          <div className='col'>
            <InputUi label="Password" hint={"*********"} type='password'/>
          </div>
        </RowFlexUi>
        <SectionUI gap={2} />
        <RowFlexUi responsiveSmall gap={1}>
          <div className='col'>
            <InputUi label="Region" select options={[
              {value: '', text: 'Select Region'},
              {value: 'accra', text: 'Greater Accra'},
            ]}/>
          </div>
          <div className='col'>
            <InputUi label="District" select options={[
              {value: '', text: 'Select District'},
              {value: 'wa', text: 'Wa Municipal'},
            ]}/>
          </div>
        </RowFlexUi>
        <SectionUI gap={2} />
          <div >
            <InputUi label="Condition" select options={[
              {value: '', text: 'Select Condition'},
            ]}/>
          </div>

        </div>
      </div>
    </FullCenteredPage>
  )
}
