import React, { Component } from 'react'
import {Checkbox, Button, Image, Header, Segment, Grid,Embed, Message,Confirm } from 'semantic-ui-react'

class App extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  render() {

const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'
return(
<div>

    <br/><br/><br/><br/>
     <Header textAlign='center'>
    {//이미지 삽입 위해서는 아직 local 저장소에서는 모르겠고, 웹 링크 타고는 가능!>이미지 선택>새탭에서 열기>링크 복사
    }
    <Header size='Huge'>
    <Image circular src={img_dachshund} /> 
      Dachshund Digital Board
      <Header.Subheader size='Large' >모아보기</Header.Subheader>
      <Segment basic color='yellow'/>
      </Header>
      <Button basic color='gray' > 모두 선택 </Button>
      <Button onClick={this.open} basic color='gray'>삭제</Button>
        <Confirm open={this.state.open} onConfirm={this.close} onCancel={this.close} 
         content='삭제 되었습니다.'
          />
      <Button basic color='gray'> 편집</Button>
      <br/><br/>
    
<Grid textAlign='center' celled='internally' >
<Grid.Row>
<Grid.Column width={3}> 
{//1번 그림
}
<Checkbox label />
<Image 
src='http://www.lgchem.com/upload/file/advertising-media/energy_1.jpg'>
 </Image>
</Grid.Column>
<Grid.Column width={3}> 
{//2번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='IHNzOHi8sJs' 
    placeholder='https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg'
    source='youtube' />
</Grid.Column>
<Grid.Column width={3}> 
{//3번 그림
}
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
  </Grid.Column>
  </Grid.Row>

<Grid.Row>
<Grid.Column width={3}> 
{//4번 그림
}
<Checkbox label />
<Image 
src='https://c1.staticflickr.com/3/2836/33389626682_c08e84e59b_o.jpg'>
 </Image>
</Grid.Column>
<Grid.Column width={3}>{//5번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='IHNzOHi8sJs' 
    placeholder='https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg'
    source='youtube' />
</Grid.Column> 
{//6번 그림
}
<Grid.Column width={3}>
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
  </Grid.Column>
</Grid.Row> 

<Grid.Row>
<Grid.Column width={3}> 
{//7번 그림
}
<Checkbox label />
<Image 
src='https://c1.staticflickr.com/3/2836/33389626682_c08e84e59b_o.jpg'>
 </Image>
</Grid.Column>
<Grid.Column width={3}>{//8번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='IHNzOHi8sJs' 
    placeholder='https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg'
    source='youtube' />
</Grid.Column> 
{//9번 그림
}
<Grid.Column width={3}>
<Checkbox label />
<Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We recommend reviewing the
      changes.
    </p>
  </Message>
  </Grid.Column>
</Grid.Row> 
</Grid>
<br/>
  
  </Header>

  </div>
)
  }
}
export default App

