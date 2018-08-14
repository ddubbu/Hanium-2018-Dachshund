import React, { Component } from 'react'
import {Checkbox, Button, Image, Header, Dropdown,
  Segment,  Menu,  Container, Grid, Message,Confirm } from 'semantic-ui-react'

class App extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  render() {

const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'
return(
<div>

    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={img_dachshund} circular style={{ marginRight: '1.5em' }} />
            Dachshund
        </Menu.Item>
      
         <Dropdown item simple text='Board'>
          <Dropdown.Menu>
            <Dropdown.Item>등록 게시판 모아보기</Dropdown.Item>
            <Dropdown.Item>승인 대기 게시판 목록</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
         <Dropdown item simple text='Contents'>
          <Dropdown.Menu>
            <Dropdown.Item>기본 설정</Dropdown.Item>
            <Dropdown.Item>컨텐츠 관리</Dropdown.Item>
            <Dropdown.Item>컨텐츠 등록</Dropdown.Item>
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
     </Container>

     <Header textAlign='center'>
    {//이미지 삽입 위해서는 아직 local 저장소에서는 모르겠고, 웹 링크 타고는 가능!>이미지 선택>새탭에서 열기>링크 복사
    }
    <Header size='Huge'>
    <Image circular src={img_dachshund} /> 
      Dachshund Digital Board
      <Header.Subheader size='Large' >텍스트</Header.Subheader>
      <Segment basic color='yellow'/>
      </Header>
      <Button basic color='gray' > 모두 선택 </Button>
      <Button onClick={this.open} basic color='gray'>삭제</Button>
        <Confirm open={this.state.open} onConfirm={this.close} onCancel={this.close} 
         content='삭제 되었습니다.'
          />
      <Button basic color='gray'> 편집</Button>
      <br/><br/>
    
<Grid textAlign='center' celled='internally' >
<Grid.Row>
<Grid.Column width={3}> 
{//1번 그림
}
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
</Grid.Column>
<Grid.Column width={3}> 
{//2번 그림
}
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
</Grid.Column>
<Grid.Column width={3}> 
{//3번 그림
}
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
  </Grid.Column>
  </Grid.Row>

<Grid.Row>
<Grid.Column width={3}> 
{//4번 그림
}
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
</Grid.Column>
<Grid.Column width={3}>{//5번 그림
}
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
</Grid.Column> 
{//6번 그림
}
<Grid.Column width={3}>
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
  </Grid.Column>
</Grid.Row> 

<Grid.Row>
<Grid.Column width={3}> 
{//7번 그림
}
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
</Grid.Column>
<Grid.Column width={3}>{//8번 그림
}
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
</Grid.Column> 
{//9번 그림
}
<Grid.Column width={3}>
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
  </Grid.Column>
</Grid.Row> 
</Grid>
<br/>
  
  </Header>
  </Segment>
  </div>
)
  }
}
export default App

