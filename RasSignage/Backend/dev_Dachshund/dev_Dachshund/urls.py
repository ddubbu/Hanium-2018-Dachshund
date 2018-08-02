from django.conf.urls import url
from Server.views import Board_api,Content_Rotation_api, User_api, Content_api

 #아래 작업을 위해 views에서 Board_api와 Content_Rotation_api를 import 한다.
 #즉, 왼쪽의 views.py의 코드에도 작업이 요한다.

urlpatterns = [

    # url은 소문자밖에 안되는 것인가?

    url(r'^board/',Board_api.as_view()),
    # 서버 주소/board 의 url로 요청이 들어오면, board_api.as_view()를 반환한다.

    url(r'^content/rotation', Content_Rotation_api.as_view()),
    # 서버 주소/content/rotation 의 url로 요청이 들어오면, board_api.as_view()를 반환한다.

    url(r'^user/',User_api.as_view()),

    url(r'^content/',Content_api.as_view())
]
