import React from 'react'
import { Rail,Button,Grid, Segment, Header,Divider,List,Image,Input } from 'semantic-ui-react'

const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'

const Hello = () => (
  <Grid centered columns={2}>
            
    <Grid.Column>
        <Segment basic>{//여백 주기 위해.

        //화면2개로 분리
        //왼쪽: 보드 게시판 카테고리 작성
        //오른쪽: 비번 변경 창
        }


         Dachshund 로고 누르면 네이버로 이동가능!
        <br/>

        <Header textAlign = 'center' size='mini'>
        <Button 
            circular image 
            href='http://naver.com'>
            <Image circular src={img_dachshund} /> 
        </Button>
        <br/>
             Dachshund Digital Board
             <Header.Subheader>비밀번호 변경-신규회원</Header.Subheader>
        </Header>

        <List bulleted>
            <List.Item>Board
                <List.List>
                    <List.Item href='http://naver.com'>NAVER 링크 이동 가능</List.Item>
                    <List.Item>Daum</List.Item>
                    <List.Item>Yahoo</List.Item>
                </List.List>
            </List.Item>
            <List.Item>Content</List.Item>
        </List>
                
        {//세로 분단 줄 표시<Divider vertical>AND</Divider>
        }
        </Segment>
    </Grid.Column>


    <Grid.Column>
        
        <br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
        <Header textAlign='center'size='huge'>
            <Button primary content='게시판 관리'/>
            <br/>
            <Button secondary content='컨텐츠 관리'/>
        </Header>
        
    </Grid.Column>
  </Grid>
)

export default Hello