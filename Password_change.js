import React from 'react'
import { Button, 
         Image,
         Dropdown,
         Segment,
         Menu,
         Container,
         Grid,
         Header,
         Card,
         Input,
         Divider,
         
         } from 'semantic-ui-react'
         

const img_login = 'https://png.pngtree.com/thumb_back/fw800/back_pic/04/37/80/47584ba9c517585.jpg'
const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'

const MenuLayout = () => (
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

    <Container centered style={{ marginTop: '3em'}}>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle' textAlign='center'>
        
        <Grid.Row>
          <Header as='h3' style={{ fontSize: '3em' }}>
            비밀번호 변경
          </Header>
        </Grid.Row>
          <Card>
            <Image src={img_login} />
            <Card.Content>
            
            <Card.Meta>
            

              <Input 
                  label= '현재 PW' 
              />
              {/*+ Input에 action으로 버튼 역할 가능?
                  action={{content:'Action Login',
                  actionPosition:'left',
                  color:'yellow'}}
                    */}

              <Divider hidden fitted/>

              <Input 
                  label= '새로운 pw'
                  
              />
              <br/>
              <br/>
              {// <Button props.color ='teal' type='submit' secondary content='Button Login'/>
              }

            </Card.Meta>
            <Grid.Column textAlign='center'>
              <Button size='medium'>OK</Button>
            </Grid.Column>
            </Card.Content>
          </Card>
   
      </Grid>
    </Segment>
            

  
       <br/><br/><br/><br/><br/>
    </Container>
  </Segment>
  </div>
)

export default MenuLayout
