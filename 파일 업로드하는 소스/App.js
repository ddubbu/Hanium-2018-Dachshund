import React from 'react'
import {Icon, Label,Input,Header,Segment, Button, Divider, Image, List} from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import FileUpload from './FileUpload'

const Hello = ({children}) => (
  <div>
  This is button for uploading file.
  
  <FileUpload>
    <Button icon>
      <Icon name = 'plus'/>
    
      <Dropzone className="ignore" onDrop={(files)=>console.log('files')}>
        {children}
      </Dropzone>
  
    </Button>
  </FileUpload>
  </div>
)
export default Hello