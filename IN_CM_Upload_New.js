import React from 'react'
import {Container,Form, TextArea,Menu,Icon,Dropdown, Label,Input,Header,Segment, Button, Divider, Image, List} from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import FileUpload from './FileUpload'
//import DayPickerInput from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import DayPicker from 'react-day-picker'

import DayPickerInput from 'react-day-picker/DayPickerInput'


import RichEditor from 'rich-editor'

const options = [
  { key: 'angular', text: '게시판1', value: 'angular' },
  { key: 'css', text: '게시판2', value: 'css' },
  { key: 'design', text: '게시판3', value: 'design' },
  { key: 'ember', text: '게시판4', value: 'ember' },

]

const options2 = [
  { key: 1, text: '텍스트', value: 1 },
  { key: 2, text: '이미지', value: 2 },
  { key: 3, text: '동영상', value: 3 },
]



const Hello = ({children}) => (
  <div>
      <Container text>
        <Menu>
          <Dropdown 
          placeholder='게시판 선택하기'
          fluid multiple selection options={options} />

          <Dropdown 
          placeholder='컨텐츠 종류' 
          selection options={options2}/>

        </Menu>
{//compact
}
        <Segment textAlign='right' >
          시작날짜
            <DayPickerInput
              dayPickerProps={{
                month: new Date(2018, 7),
                showWeekNumbers: true,
                todayButton: 'Today',
              }}
            />
          ~ 마감날짜
            <DayPickerInput
              dayPickerProps={{
                month: new Date(2018, 8),
                showWeekNumbers: true,
                todayButton: 'Today',
              }}
            />

        </Segment>      
    <br/><br/>
    제목
    <Input fluid/>
    내용
    <Form>
      <TextArea autoHeight placeholder='Try adding multiple lines' />
    </Form>

    <br/><br/>
  이미지/동영상 누르면<br/>
  This is button for uploading file.

    <FileUpload>
      <Button icon>
        <Icon name = 'plus'/>
      
        <Dropzone className="ignore" onDrop={(files)=>console.log('files')}>
          {children}
        </Dropzone>
    
      </Button>
    </FileUpload>

    <br/><br/>
    <Header textAlign='right'>
      <Button primary>저장 </Button>
    </Header>

    </Container>
  



  </div>

) 
export default Hello

