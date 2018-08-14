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

const Initial_Setting =() =>(

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
              <Button size='medium' href='http://localhost:3000/Login'>OK</Button>
            </Grid.Column>
            </Card.Content>
          </Card>
   
      </Grid>
    </Segment>
)
export default Initial_Setting