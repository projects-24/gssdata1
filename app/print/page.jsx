import React from 'react'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import TextUi from '@/ui/Text'
import SectionUI from '@/ui/section'
import RowFlexUi from '@/ui/RowFlex'
import InputUi from '@/ui/input'
import UiButton from '@/ui/button'
import { PiPaperPlane, PiPrinter } from 'react-icons/pi'

export default function Print() {
    let data = {
        serial:3004994940383,
        'username': 'Ahmed Salim Adam',
        'region': 'Upper West Region',
        'district': 'Wa Municipal',
        'condition': 'Health condition data'
     
    }
  return (
    <FullCenteredPage>
 <div className="width-700-max fit padding">
    <div className="container">
      <RowFlexUi alignItems='flex-end' gap={2} justify='space-between'>
        <div>
        <TextUi text="Print Document" size='big' block/>
        <TextUi text="Click the button to print the document" color='dark400'/>
        </div>
        <div>
          <UiButton text="Print" bg='primary' raised bold rounded endIcon={<PiPrinter />} />
        </div>
      </RowFlexUi>
    <SectionUI gap={4} />
 
  <div>
  <InputUi
  label={'Serial Number'}
  content={<div className="padding border roundEdge dark900">
    <TextUi text={data.serial} size='big' block/>
</div>}
  />

  </div>
  <SectionUI gap={2} />
      <div className='col'>
        <InputUi label="Username" content={<div className="padding border roundEdge dark900">
    <TextUi text={data.username} bold  block/>
</div>}/>
      </div>
    <SectionUI gap={2} />
    <div className="padding border roundEdge dark900">
    <RowFlexUi responsiveSmall gap={1}>
      <div className='col'>
        <InputUi label="Region" content={<TextUi text={data.region} bold  block/>}/>
      </div>
      <div className='col'>
        <InputUi label="District" content={<TextUi text={data.district} bold  block/>}/>
      </div>
    </RowFlexUi>
</div>
  
    <SectionUI gap={2} />
    <div className='col'>
        <InputUi label="Condition" content={<div className="padding border roundEdge dark900">
    <TextUi text={data.condition} bold  block/>
</div>}/>
      </div>
 
    </div>
 
      </div>
    </FullCenteredPage>
  )
}
