import React from 'react'
import { Input,Grid, Image, Segment,Header,Button, Menu} from 'semantic-ui-react'



const Hello = () => (
  <div>
    <br/><br/><br/>
    <Header  size='large' textAlign='center'> 게시판 관리 
    </Header>
    <br/><br/><br/>

  <Grid columns={6} divided>
      <Grid.Column></Grid.Column>
      <Grid.Column></Grid.Column>

      <Grid.Column>
        <Button>삭제</Button>
      </Grid.Column>
      <Grid.Column>
        <Input type='text' placeholder='위치/장소 변경'>
        <input/>
        <Button>수정 </Button>
        </Input>
      </Grid.Column>

  </Grid>
  </div>
  
)

export default Hello