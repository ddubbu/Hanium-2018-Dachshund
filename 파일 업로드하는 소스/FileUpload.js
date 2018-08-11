import React from 'react'
import {Label,Input,Header,Segment, Button, Divider, Image, List} from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

const FileUpload= ({children}) => (

  <div>
  
    <Button>
      <Dropzone className="ignore" onDrop={(files)=>console.log(files)}>
      {children}
    </Dropzone>
 
  </Button>
  </div>
)


export default FileUpload

