import React from 'react'
import { Button, Image, Header, Popup, Segment, Grid, Card, Menu ,Container, Dropdown } from 'semantic-ui-react'

const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'

 const IN_CM_Boards_Content = () => (
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
          <Button as='a' inverted  href='http://localhost:3000/home' as='a' header>
            Log out
          </Button>
        </Menu.Item>
       </Container>
    </Menu>
     <Segment style={{background: '#FAFAFA'}}>
     <Container centered style={{ marginTop: '8em'}}>
     </Container>
     <Header textAlign='center'>
    {
    }
    <Header size='Huge'>
    <Image circular src={img_dachshund} /> 
      Dachshund Digital Board
      <Header.Subheader size='Large' >게시판 선택하기</Header.Subheader>
      <Segment basic color='yellow'/>
      </Header>
      <br/><br/>
    
<Grid textAlign='center' celled='internally' >
<Grid.Row>
<Grid.Column width={4}> 
{//1번 그림
}

  <Button inverted color='olive'>
    <Card fluid='false'>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Board1</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Popup wide trigger={<Button icon='angle double down' />} on='click' position='bottom center'>
      <Grid centered divided columns={4}>
      <Grid.Column textAlign='center'>
        <Button inverted color='blue' content='모아보기' href= 'http://localhost:3000/IN_CM_Content_all_m' />
      </Grid.Column >

      <Grid.Column textAlign='center'>
      <Button inverted color='red' content='텍스트' href= 'http://localhost:3000/IN_CM_Content_text_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='olive' content='이미지' href= 'http://localhost:3000/IN_CM_Content_image_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='yellow' content='동영상' href= 'http://localhost:3000/IN_CM_Content_video_m' />
      </Grid.Column>
    </Grid>
  </Popup>
      </Card.Content>
    </Card>
    </Button>
</Grid.Column>

<Grid.Column width={4}> 
{//2번 그림
}
<Button inverted color='pink'>
    <Card fluid='false' >
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
        <Card.Header>Board2</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Popup wide trigger={<Button icon='angle double down' />} on='click' position='bottom center'>
      <Grid centered divided columns={4}>
      <Grid.Column textAlign='center'>
      <Button inverted color='blue' content='모아보기' href= 'http://localhost:3000/IN_CM_Content_all_m' />
      </Grid.Column >

      <Grid.Column textAlign='center'>
      <Button inverted color='red' content='텍스트' href= 'http://localhost:3000/IN_CM_Content_text_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='olive' content='이미지' href= 'http://localhost:3000/IN_CM_Content_image_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='yellow' content='동영상' href= 'http://localhost:3000/IN_CM_Content_video_m' />
      </Grid.Column>
    </Grid>
  </Popup>
        
      </Card.Content>
    </Card>
    </Button>
</Grid.Column>

<Grid.Column width={4}> 
{//3번 그림
}
<Button inverted color='blue'>
    <Card fluid='false' >
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
        <Card.Header>Board3</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>Jenny requested permission to view your contact details</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Popup wide trigger={<Button icon='angle double down' />} on='click' position='bottom center'>
      <Grid centered divided columns={4}>
      <Grid.Column textAlign='center'>
      <Button inverted color='blue' content='모아보기' href= 'http://localhost:3000/IN_CM_Content_all_m' />
      </Grid.Column >

      <Grid.Column textAlign='center'>
      <Button inverted color='red' content='텍스트' href= 'http://localhost:3000/IN_CM_Content_text_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='olive' content='이미지' href= 'http://localhost:3000/IN_CM_Content_image_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='yellow' content='동영상' href= 'http://localhost:3000/IN_CM_Content_video_m' />
      </Grid.Column>
    </Grid>
  </Popup>
      </Card.Content>
    </Card>
    </Button>
  </Grid.Column>
  </Grid.Row>

<Grid.Row>
<Grid.Column width={4}> 
{//4번 그림
}
<Button inverted color='red'>
    <Card fluid='false'>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
        <Card.Header>Board4</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>Jenny requested permission to view your contact details</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Popup wide trigger={<Button icon='angle double down' />} on='click' position='bottom center'>
      <Grid centered divided columns={4}>
      <Grid.Column textAlign='center'>
      <Button inverted color='blue' content='모아보기' href= 'http://localhost:3000/IN_CM_Content_all_m' />
      </Grid.Column >

      <Grid.Column textAlign='center'>
      <Button inverted color='red' content='텍스트' href= 'http://localhost:3000/IN_CM_Content_text_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='olive' content='이미지' href= 'http://localhost:3000/IN_CM_Content_image_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='yellow' content='동영상' href= 'http://localhost:3000/IN_CM_Content_video_m' />
      </Grid.Column>
    </Grid>
  </Popup>
        
      </Card.Content>
      
    </Card>
    </Button>
</Grid.Column>
<Grid.Column width={4}>{//5번 그림
}
<Button inverted color='blue'>
    <Card fluid='false'>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
        <Card.Header>Board3</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>Jenny requested permission to view your contact details</Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Popup wide trigger={<Button icon='angle double down' />} on='click' position='bottom center'>
      <Grid centered divided columns={4}>
      <Grid.Column textAlign='center'>
      <Button inverted color='blue' content='모아보기' href= 'http://localhost:3000/IN_CM_Content_all_m' />
      </Grid.Column >

      <Grid.Column textAlign='center'>
      <Button inverted color='red' content='텍스트' href= 'http://localhost:3000/IN_CM_Content_text_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='olive' content='이미지' href= 'http://localhost:3000/IN_CM_Content_image_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='yellow' content='동영상' href= 'http://localhost:3000/IN_CM_Content_video_m' />
      </Grid.Column>
    </Grid>
  </Popup>
      </Card.Content>
    </Card>
    </Button>

</Grid.Column> 
{//6번 그림
}
<Grid.Column width={4}>
 <Button inverted color='olive'>
    <Card fluid='false'>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Board1</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Popup wide trigger={<Button icon='angle double down' />} on='click' position='bottom center'>
      <Grid centered divided columns={4}>
      <Grid.Column textAlign='center'>
      <Button inverted color='blue' content='모아보기' href= 'http://localhost:3000/IN_CM_Content_all_m' />
      </Grid.Column >

      <Grid.Column textAlign='center'>
      <Button inverted color='red' content='텍스트' href= 'http://localhost:3000/IN_CM_Content_text_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='olive' content='이미지' href= 'http://localhost:3000/IN_CM_Content_image_m' />
      </Grid.Column>

      <Grid.Column textAlign='center'>
        <Button inverted color='yellow' content='동영상' href= 'http://localhost:3000/IN_CM_Content_video_m' />
      </Grid.Column>
    </Grid>
  </Popup>
      </Card.Content>
    </Card>
    </Button>
  </Grid.Column>
</Grid.Row> 

</Grid>
<br/>
<Button basic color='gray' > 이전 </Button>
<Button basic color='gray' > 다음</Button>

  </Header>

  </Segment>
  </div>
  )
export default IN_CM_Boards_Content

