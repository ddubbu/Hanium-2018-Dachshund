import React, { Component } from 'react'
import { Dropdown, Header, Input, 
  Segment,  Menu,  Container, Button, Image,Label,Confirm } from 'semantic-ui-react'


class App extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  render() {
  
    
const options = [
  { key: 1, text: '15초', value: 1 },
  { key: 2, text: '25초', value: 2 },
  { key: 3, text: '35초', value: 3 },
  { key: 4, text: '1분', value: 4 },
]
const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'
return(
    <div>
    <Menu fixed='top' inverted>
      <Container>
      <Menu.Item  href='http://localhost:3000/Home_Login' as='a' header>
          <Image size='mini' src={img_dachshund} circular style={{ marginRight: '1.5em' }} />
            Dachshund
        </Menu.Item>
      
         <Dropdown item simple text='Board'>
          <Dropdown.Menu>
          <Dropdown.Item active  href='http://localhost:3000/IN_BM_Board_Waitlist'>승인 대기 게시판 목록</Dropdown.Item>
            <Dropdown.Item href='http://localhost:3000/IN_BM_Board_DM'>위치 수정</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
         <Dropdown item simple text='Contents'>
          <Dropdown.Menu>
          <Dropdown.Item href='http://localhost:3000/IN_CM_Setting_m' >기본 설정</Dropdown.Item>
            <Dropdown.Item href='http://localhost:3000/IN_CM_Board_Content'>컨텐츠 관리</Dropdown.Item>
            <Dropdown.Item>컨텐츠 등록</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
         <Menu.Item position='right'>
          <Button as='a' inverted href='http://localhost:3000/home' as='a' header>
            Log out
          </Button>
        </Menu.Item>
       </Container>
    </Menu>
     <Segment style={{background: '#FAFAFA'}}>
     <br/><br/>
     <Container centered style={{ marginTop: '8em'}}>
     </Container>

     <Header textAlign='center'>
    {//이미지 삽입 위해서는 아직 local 저장소에서는 모르겠고, 웹 링크 타고는 가능!>이미지 선택>새탭에서 열기>링크 복사
    }
    <Header size='Huge'>
    <Image circular src={img_dachshund} /> 
      Dachshund Digital Board
      <Header.Subheader size = 'medium' >반복주기 설정</Header.Subheader>
      </Header>
      
      <Segment color='yellow' >
      
      <Label color='teal' size='large' > 텍스트 </Label>
       <Dropdown selection options={options} placeholder='Choose an option' />
       <br/>
       <br/>
       <Label color='yellow'  size='large' > 이미지 </Label>
       <Dropdown selection options={options} placeholder='Choose an option' />
       <br/>
       <br/>
       <Label color= 'purple'  size='large'> 동영상 </Label>
       <Dropdown selection options={options} placeholder='Choose an option' />
       <br/>
       <br/> 
       <div>
        <Button onClick={this.open}>확인</Button>
        <Confirm open={this.state.open} onConfirm={this.close} onCancel={this.close} 
         content='설정이 완료되었습니다.'
          />
      </div>
      
      </Segment>
       </Header>
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </Segment>
  
  </div>
)
  }
}
export default App
