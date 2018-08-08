import React from 'react'
import { Grid, Image, Segment,Header,Button, Menu} from 'semantic-ui-react'


//아직 게시판 등록 즉시-> 생기게는 못함.

const GridExampleDividedNumber = () => (
  <div>
    <br/><br/><br/>
    <Header  size='large' textAlign='center'> 게시판 선택하기 
    </Header>
    <br/><br/><br/>

  <Grid columns={10} divided>
      <Grid.Column></Grid.Column>
      <Grid.Column></Grid.Column>
      <Grid.Column></Grid.Column>

      <Grid.Column>
        <Button>게시판A</Button>
        <br/><br/>
        <Button>게시판E</Button>
      </Grid.Column>
      <Grid.Column>
        <Button>게시판B </Button>
      </Grid.Column>
      <Grid.Column>
        <Button>게시판C </Button>
      </Grid.Column>
      <Grid.Column>
        <Button>게시판D </Button>
      </Grid.Column>

      <Grid.Column></Grid.Column>
      <Grid.Column></Grid.Column>
      <Grid.Column></Grid.Column>
    
  </Grid>
  <br/><br/><br/>
  <Menu>
    <Menu.Menu position='right'>
    <Menu.Item>
      <Button> 이전 </Button>
    </Menu.Item>
    <Menu.Item>
      <Button> 다음 </Button>
    </Menu.Item>
    </Menu.Menu>
  </Menu>
  
 
  </div>
  
)

export default GridExampleDividedNumber