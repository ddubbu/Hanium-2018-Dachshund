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
         Input,
         } from 'semantic-ui-react'

const CardExampleGroups = () => (
    <div>
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
            trigger={<Button basic color='red' icon='delete' content='삭제' />}                
            content={<Button color='red' content='확인' />}
            on='click'
            position='top right'
          />
          <Popup
            trigger={<Button basic color='green' icon='pencil' content='수정' />}                
            content={<Input action='확인' placeholder='주소를 입력하세요.'/>}
            on='click'
            position='bottom right'
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
            trigger={<Button basic color='red' icon='delete' content='삭제' />}                
            content={<Button color='red' content='확인' />}
            on='click'
            position='top right'
          />
          <Popup
            trigger={<Button basic color='green' icon='pencil' content='수정' />}                
            content={<Input action='확인' placeholder='주소를 입력하세요.' />}
            on='click'
            position='bottom right'
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
            trigger={<Button basic color='red' icon='delete' content='삭제' />}                
            content={<Button color='red' content='확인' />}
            on='click'
            position='top right'
          />
          <Popup
            trigger={<Button basic color='green' icon='pencil' content='수정' />}                
            content={<Input action='확인' placeholder='주소를 입력하세요.' />}
            on='click'
            position='bottom right'
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
            trigger={<Button basic color='red' icon='delete' content='삭제' />}                
            content={<Button color='red' content='확인' />}
            on='click'
            position='top right'
          />
          <Popup
            trigger={<Button basic color='green' icon='pencil' content='수정' />}                
            content={<Input action='확인' placeholder='주소를 입력하세요.' />}
            on='click'
            position='bottom right'
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
            trigger={<Button basic color='red' icon='delete' content='삭제' />}                
            content={<Button color='red' content='확인' />}
            on='click'
            position='top right'
          />
          <Popup
            trigger={<Button basic color='green' icon='pencil' content='수정' />}                
            content={<Input action='확인' placeholder='주소를 입력하세요.' />}
            on='click'
            position='bottom right'
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
            trigger={<Button basic color='red' icon='delete' content='삭제' />}                
            content={<Button color='red' content='확인' />}
            on='click'
            position='top right'
          />
          <Popup
            trigger={<Button basic color='green' icon='pencil' content='수정' />}                
            content={<Input action='확인' placeholder='주소를 입력하세요.' />}
            on='click'
            position='bottom right'
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
