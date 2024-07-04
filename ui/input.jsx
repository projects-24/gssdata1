import React from 'react'
import Input from 'funuicss/ui/input/Input'
import Text from 'funuicss/ui/text/Text'


export default function InputUi
({label, standard, hint, content, required, ...rest }) {
  return <div>
    <Text 
    text={`${label || ''}  ${required ? '*' : ''}` || ''} 
    block 
    size='smaller' 
    uppercase 
    bold 
    color='primary'
    funcss='margin-bottom-10'
    />
  {
    content  || <Input label={hint || ''} funcss=' _card roundEdgeSmall text-minified' borderless {...rest} fullWidth />
  }  
</div>
}
