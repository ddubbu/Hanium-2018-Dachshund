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
         } from 'semantic-ui-react'

const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'

const CardExampleGroups = () => (
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
          <Button as='a' inverted  href='http://localhost:3000/home' as='a' header>>
            Log out
          </Button>
        </Menu.Item>

      </Container>
    </Menu>

    <Segment style={{background: '#FAFAFA'}}>

    <Container centered style={{ marginTop: '8em'}}>
      <Grid.Row>

        <Header 
          as='h1'
          content = 'Board List'         
          style={{ fontSize: '3em'}}          
        />
                  
        <Divider>
        </Divider>     
          
      </Grid.Row>
       
      <Popup
        trigger={<Button color='blue' icon='check' content='전체 승인' />}                
        content='전체 승인 완료'
        on='click'
        position='bottom right'
      />
       
      <br/><br/><br/>
      <Card.Group centered>
    
        <Card>
          <Image src='http://www.lgblog.co.kr/wp-content/uploads/2016/01/%EC%98%A4%EC%9E%A5%EA%B5%90-%EA%B8%80%EC%9E%98%EC%A7%81-624-312x176.png' />
          <Card.Content>
            <Card.Header>게시판A</Card.Header>
            <Divider>
            </Divider>
            <Card.Description>
              <strong>위치</strong>
            </Card.Description>
            <Card.Description>
              서울특별시 종로구 새문안로 89 정우빌딩
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Popup
                trigger={<Button basic color='green' icon='check' content='승인' />}                
                content='승인 완료'
                on='click'
                position='bottom right'
              />
              <Popup
                trigger={<Button basic color='red' icon='delete' content='삭제' />}                
                content={<Button color='red' content='확인' />}
                on='click'
                position='top right'
              />
            </div>
          </Card.Content>
        </Card>

        
        <Card>
          <Image src='http://www.lgblog.co.kr/wp-content/uploads/2016/01/%EC%98%A4%EC%9E%A5%EA%B5%90-%EA%B8%80%EC%9E%98%EC%A7%81-624-312x176.png' />
          <Card.Content>
            <Card.Header>게시판B</Card.Header>
            <Divider>
            </Divider>
            <Card.Description>
              <strong>위치</strong>
            </Card.Description>
            <Card.Description>
            서울 종로구 종로 68
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Popup
                trigger={<Button basic color='green' icon='check' content='승인' />}                
                content='승인 완료'
                on='click'
                position='bottom right'
              />
              <Popup
                trigger={<Button basic color='red' icon='delete' content='삭제' />}                
                content={<Button color='red' content='확인' />}
                on='click'
                position='top right'
              />
            </div>
          </Card.Content>
        </Card>

        
        <Card>
          <Image src='http://www.lgblog.co.kr/wp-content/uploads/2016/01/%EC%98%A4%EC%9E%A5%EA%B5%90-%EA%B8%80%EC%9E%98%EC%A7%81-624-312x176.png' />
          <Card.Content>          
            <Card.Header>게시판C</Card.Header>
            <Divider>
            </Divider>
            <Card.Description>
              <strong>위치</strong>
            </Card.Description>
            <Card.Description>
            ......
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Popup
                trigger={<Button basic color='green' icon='check' content='승인' />}                
                content='승인 완료'
                on='click'
                position='bottom right'
              />
              <Popup
                trigger={<Button basic color='red' icon='delete' content='삭제' />}                
                content={<Button color='red' content='확인' />}
                on='click'
                position='top right'
              />
              
            </div>
          </Card.Content>
        </Card>

        
        <Card>
          
          <Image src='http://www.lgblog.co.kr/wp-content/uploads/2016/01/%EC%98%A4%EC%9E%A5%EA%B5%90-%EA%B8%80%EC%9E%98%EC%A7%81-624-312x176.png' />
          <Card.Content>          
            <Card.Header>게시판D</Card.Header>
            <Divider>
            </Divider>
            <Card.Description>
              <strong>위치</strong>
            </Card.Description>
            <Card.Description>
            ......
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Popup
                trigger={<Button basic color='green' icon='check' content='승인' />}                
                content='승인 완료'
                on='click'
                position='bottom right'
              />
              <Popup
                trigger={<Button basic color='red' icon='delete' content='삭제' />}                
                content={<Button color='red' content='확인' />}
                on='click'
                position='top right'
              />      
              
            </div>
          </Card.Content>
        </Card>

        
        <Card>
          <Image src='http://www.lgblog.co.kr/wp-content/uploads/2016/01/%EC%98%A4%EC%9E%A5%EA%B5%90-%EA%B8%80%EC%9E%98%EC%A7%81-624-312x176.png' />
          <Card.Content>          
            <Card.Header>게시판E</Card.Header>
            <Divider>
            </Divider>
            <Card.Description>
              <strong>위치</strong>
            </Card.Description>
            <Card.Description>
            ......
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Popup
                trigger={<Button basic color='green' icon='check' content='승인' />}                
                content='승인 완료'
                on='click'
                position='bottom right'
              />
              <Popup
                trigger={<Button basic color='red' icon='delete' content='삭제' />}                
                content={<Button color='red' content='확인' />}
                on='click'
                position='top right'
              />
              
            </div>
          </Card.Content>
        </Card>

        
        <Card>
          <Image src='http://www.lgblog.co.kr/wp-content/uploads/2016/01/%EC%98%A4%EC%9E%A5%EA%B5%90-%EA%B8%80%EC%9E%98%EC%A7%81-624-312x176.png' />
          <Card.Content>          
            <Card.Header>게시판F</Card.Header>
            <Divider>
            </Divider>
            <Card.Description>
              <strong>위치</strong>
            </Card.Description>
            <Card.Description>
            ......
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Popup
                trigger={<Button basic color='green' icon='check' content='승인' />}                
                content='승인 완료'
                on='click'
                position='bottom right'
              />
              <Popup
                trigger={<Button basic color='red' icon='delete' content='삭제' />}                
                content={<Button color='red' content='확인' />}
                on='click'
                position='top right'
              />
              
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      <br/><br/><br/><br/><br/>
    </Container>
  </Segment>
  </div>
)

export default CardExampleGroups