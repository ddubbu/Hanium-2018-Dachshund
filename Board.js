import React from 'react'
import {Header,Segment, Button, Divider, Image} from 'semantic-ui-react'


//button으로->나중에는 입력창으로
// divider로 2줄 구분
const Hello = () => (

<div>
    {//화면 중앙(상하좌우 모드) 배치를 위함
    }
    <Divider hidden/>
    <Divider hidden/>
    <Divider hidden/>
    <Divider hidden/>
    <Divider hidden/>
    <Header textAlign='center'>
    {//이미지 삽입 위해서는 아직 local 저장소에서는 모르겠고, 웹 링크 타고는 가능!>이미지 선택>새탭에서 열기>링크 복사
    }
    <Header size='Huge'>
    <Image circular src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ' /> 
      Dachshund Digital Board
      </Header>

    <Segment padded>
        <Button primary content='Login'/>
    <Divider hidden fitted /> 
        <Button secondary content='Sign up'/>

    </Segment>
    </Header>
</div>
)
export default Hello
