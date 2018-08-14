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
      

                <Dropdown text='Boards' simple item as='a'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='등록된 게시판' href='http://localhost:3000/IN_BM_Board_DM'/>
                    <Dropdown.Item text='승인 대기' href='http://localhost:3000/IN_BM_Board_WaitList'/>
                  </Dropdown.Menu>
                </Dropdown>  

                <Dropdown text='Contents' simple item as='a'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='기본 설정' href='http://localhost:3000/IN_CM_Setting'/>
                    <Dropdown.Item text='컨텐츠 관리' href='http://localhost:3000/IN_CM_Boards'/>
                    <Dropdown.Item text='컨텐츠 등록' href='http://localhost:3000/IN_CM_Upload_Md'/>
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
