import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import { Home, Login, Initial_Setting,
    Home_Login,IN_BM_Board_DM} from '../pages';

import {
    Button,
    Container,
    Divider,
    Header,
    Grid,
    Icon,
    Image,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Card,
    Input,
    Dropdown
  } from 'semantic-ui-react'
             
  const img_login = 'https://png.pngtree.com/thumb_back/fw800/back_pic/04/37/80/47584ba9c517585.jpg'
  const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'
  

class Urls extends Component {
  render(){
    return(
        <div>

{//layout이 곂침! 그래서 home url만 따로 뺌.
}
<Route exact path ="/home" component={Home}/>
       

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
            


{//url 만드는 곳
}            
            
            <Route path="/login" component={Login}/>
            <Route path="/Initial_Setting" component={Initial_Setting}/>
            <Route path="/Home_Login" component={Home_Login}/>
            <Route path="/IN_BM_Board_DM" component={IN_BM_Board_DM}/>

            <Button href='http://localhost:3000/home'> Go to home </Button>
            
            
       <br/><br/><br/><br/><br/>
    </Container>
  </Segment>
  </div>
)

export default MenuLayout            
        </div>
    );
  }
}
export default Urls;