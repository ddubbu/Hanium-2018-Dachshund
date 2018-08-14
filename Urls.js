import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import { Home, Login, Initial_Setting,
    Home_Login,IN_BM_Board_DM,
    IN_BM_Board_WaitList} from '../pages';

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
  

  const Urls = () => (

//url 만드는 곳
          
<div> 
            <Route exact path ="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/Initial_Setting" component={Initial_Setting}/>
            <Route path="/Home_Login" component={Home_Login}/>
            <Route path="/IN_BM_Board_DM" component={IN_BM_Board_DM}/>
            <Route path="/IN_BM_Board_WaitList" component={IN_BM_Board_WaitList}/>

          <br/><br/><br/><br/><br/>

</div>
)
export default Urls