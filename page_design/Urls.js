import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import { Home, Login, Initial_Setting,
    Home_Login,IN_BM_Board_DM,IN_BM_Board_Waitlist,
    IN_CM_Board_Content, IN_CM_Content_all_m,
    IN_CM_Content_image_m, IN_CM_Content_text_m, IN_CM_Content_video_m ,IN_CM_Setting_m} from '../pages';


  const img_login = 'https://png.pngtree.com/thumb_back/fw800/back_pic/04/37/80/47584ba9c517585.jpg'
  const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'
  

class Urls extends Component {
  render(){
    return(
        <div>

{//layout이 곂침! 그래서 home url만 따로 뺌.
}
<Route exact path ="/home" component={Home}/>

    <div>
 
{//url 만드는 곳
}            
            
            <Route path="/login" component={Login}/>
            <Route path="/Initial_Setting" component={Initial_Setting}/>
            <Route path="/Home_Login" component={Home_Login}/>
            <Route path="/IN_BM_Board_DM" component={IN_BM_Board_DM}/>
            <Route path="/IN_BM_Board_Waitlist" component={IN_BM_Board_Waitlist}/>
            <Route path="/IN_CM_Board_Content" component={IN_CM_Board_Content}/>
            <Route path="/IN_CM_Content_all_m" component={IN_CM_Content_all_m}/>
            <Route path="/IN_CM_Content_image_m" component={IN_CM_Content_image_m}/>
            <Route path="/IN_CM_Content_text_m" component={IN_CM_Content_text_m}/>
            <Route path="/IN_CM_Content_video_m" component={IN_CM_Content_video_m}/>
            <Route path="/IN_CM_Setting_m" component={IN_CM_Setting_m}/>

            
            
            
   

  </div>
)
       
        </div>
    );
  }
}
export default Urls;