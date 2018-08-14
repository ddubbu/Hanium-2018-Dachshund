import React from 'react'
import { Button,
         Card, 
         Image,
         Dropdown,
         Segment,
         Menu,
         Container,
         Grid,
         Header,
         Divider,
         Popup,
         Checkbox,
         Input, Form, TextArea, Icon
         } from 'semantic-ui-react'

import Dropzone from 'react-dropzone'
import FileUpload from './FileUpload'
//import DayPickerInput from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import DayPicker from 'react-day-picker'

import DayPickerInput from 'react-day-picker/DayPickerInput'

const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'


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
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                <Image size='mini' src={img_dachshund} circular style={{ marginRight: '1.5em' }} />
                Dachshund
                </Menu.Item>
        

                    <Dropdown text='Board' simple item as='a'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='등록된 게시판' href='http://localhost:3000/IN_BM_Board_DM'/>
                        <Dropdown.Item text='승인 대기' href='http://localhost:3000/IN_BM_Board_WaitList'/>
                    </Dropdown.Menu>
                    </Dropdown>  

                    <Dropdown text='Contents' simple item as='a'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='기본 설정' href='http://localhost:3000/IN_CM_Setting'/>
                        <Dropdown.Item text='컨텐츠 관리' href='http://localhost:3000/IN_CM_Boards'/>
                        <Dropdown.Item text='컨텐츠 등록' href='http://localhost:3000/IN_CM_Upload'/>
                    </Dropdown.Menu>
                    </Dropdown>

                <Menu.Item position='right'>
                    <Button as='a' inverted>
                    Log out
                    </Button>
                </Menu.Item>

            </Container>
        </Menu>

        <Segment style={{background: '#FAFAFA'}}>

            <Container centered style={{ marginTop: '8em'}}>

{//여기부터 편집
}

                <Container text>
                        <Menu>
                        <Dropdown 
                        placeholder='게시판 선택하기'
                        fluid multiple selection options={options} />

                        <Dropdown 
                        placeholder='컨텐츠 종류' 
                        selection options={options2}/>

                        </Menu>

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
            </Container>
        </Segment>
    </div>

) 
export default Hello

