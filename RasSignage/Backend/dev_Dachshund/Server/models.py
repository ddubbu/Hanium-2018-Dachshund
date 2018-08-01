from django.db import models #class models 상속받기 위해 import


#DB Content_Rotation

class Content_Rotation(models.Model):
    no_Setting = models.IntegerField(primary_key=True)
    Ro_Image = models.CharField(max_length=256)
    Ro_text= models.CharField(max_length=4098)
    Ro_video= models.CharField(max_length=4098)

class Content(models.Model):
    Name = models.IntegerField(primary_key=True)
#DB Board
class Board(models.Model): # 괄호안에 있는 것은 상속받을 부모임. 즉, Board는 models.Model을 상속받는다.
    Name = models.CharField(max_length=256, primary_key=True) #Data로 문자(열)를 받는다.
    isApproval = models.CharField(max_length=256) #입력받을 data의 max 길이가 2byte
    Location = models.CharField(max_length=256, verbose_name="위치")
                #verbose_name은 서버에서 이 model의 이름을 Location이 아닌 '위치'로 사용하겠다는 것이다.
    Reg_Date = models.DateTimeField(auto_created=True, auto_now=True) #자동으로 날짜가 추출됨.
    description = models.TextField(blank=True) #여러 줄의 문자열 입력이 가능한 models.TextField
    published_date = models.DateTimeField(blank=True, null=True)
   # id = models.AutoField(primary_key=True)
   # No_Setting= models.ManyToManyField(Content, through='Content_Rotation')
