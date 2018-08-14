import React from 'react'
import { Button, 
         Image,
         Dropdown,
         Segment,
         Menu,
         Container,
         Header,
         Grid
         } from 'semantic-ui-react'
         
 const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'
 const IN_CM = () => (
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
             
     <Header textAlign='center'>
    {//이미지 삽입 위해서는 아직 local 저장소에서는 모르겠고, 웹 링크 타고는 가능!>이미지 선택>새탭에서 열기>링크 복사
    }
    <Header size='Huge'>
    <Image circular src={img_dachshund} /> 
      Dachshund Digital Board
      <Header.Subheader size='Large' >컨텐츠 관리</Header.Subheader>
      <Segment basic color='yellow'/>
      </Header>
      <Segment padded={'very'}  inverted color= 'black' >
      <Grid textAlign='center' columns={3} >
<Grid.Column width={4}>
<Button basic color= {'blue'} size ={'huge'} > 기본설정 </Button>
</Grid.Column>
<Grid.Column width={5}>
<Button basic color= 'yellow' size ={'huge'}> 게시판 별 컨텐츠 관리 </Button>
</Grid.Column>
<Grid.Column width={4}>
<Button basic color= 'pink' size ={'huge'}> 컨텐츠 등록 </Button>

  </Grid.Column>
</Grid>
<br/>
  

  </Segment>
  </Header>
        <br/><br/><br/><br/><br/>
    </Container>
  </Segment>
  </div>
)
 export default IN_CM