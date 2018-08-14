import React from 'react'
import { Button, 
         Image,
         Dropdown,
         Segment,
         Menu,
         Container,
         } from 'semantic-ui-react'

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

    <Container centered style={{ marginTop: '8em'}}>


            

            //이곳에 나머지 작성해 주시면 됩니다.








       <br/><br/><br/><br/><br/>
    </Container>
  </Segment>
  </div>
)

export default MenuLayout
