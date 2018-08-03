import React from 'react'
import {Label,Input,Header,Segment, Button, Divider, Image} from 'semantic-ui-react'


           


const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'
//button으로->나중에는 입력창으로
// divider로 2줄 구분
const Hello = () => (

    <div>
    {/*화면 중앙(상하좌우 모드) 배치를 위함
    */}

    <br/><br/><br/><br/>

    <Header textAlign='center'>
    {//이미지 삽입 위해서는 아직 local 저장소에서는 모르겠고, 웹 링크 타고는 가능!>이미지 선택>새탭에서 열기>링크 복사
    }
    <Header size='Huge'>
    <Image circular src={img_dachshund} /> 
      Dachshund Digital Board
      </Header>

    <Segment padded>

        <Input 
            label= 'ID' 
            placeholder='초기 id : board1'
        />
         {/*+ Input에 action으로 버튼 역할 가능?

            action={{content:'Action Login',
            actionPosition:'left',
            color:'yellow'}}
              */}
        
    <Divider hidden fitted/>

        <Input 
            label= 'pw'
            placeholder='초기 pw : 1234' 
        />
    <br/>
    <br/>
       {// <Button props.color ='teal' type='submit' secondary content='Button Login'/>
       }
       <button class='ui yellow button'>Login</button>

    </Segment>
    </Header>
</div>
)
export default Hello