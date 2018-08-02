from django.db import models #class models 상속받기 위해 import

class User(models.Model):
    Init_Id = models.CharField(max_length=32, primary_key=True)
    Init_Password = models.CharField(max_length=256)
    User_Password = models.CharField(max_length=256)# 암호화, 글자수 제한 고려
    User_Password2 = models.CharField(max_length=256)

#DB Board
class Board(models.Model): # 괄호안에 있는 것은 상속받을 부모임. 즉, Board는 models.Model을 상속받는다.
    Name = models.CharField(max_length=256, primary_key=True) #Data로 문자(열)를 받는다.
    IsApproval = (
        ('Y', 'Yes'),
        ('N', 'No')
    )
    isApproval = models.CharField(max_length=1, choices=IsApproval)  # 입력받을 data의 max 길이가 2byte
    Location = models.CharField(max_length=256, verbose_name="위치")
                #verbose_name은 서버에서 이 model의 이름을 Location이 아닌 '위치'로 사용하겠다는 것이다.
    # 날씨 추가 고려
    Reg_Date = models.DateTimeField(auto_created=True, auto_now=True) #자동으로 날짜가 추출됨.
    description = models.TextField(blank=True) #여러 줄의 문자열 입력이 가능한 models.TextField

    # No_Setting= models.ManyToManyField(Content, through='Content_Rotation')


#DB Content_Rotation
class Content_Rotation(models.Model):
    no_Setting = models.IntegerField(primary_key=True)  # 주기 번호
    Ro_Image = models.IntegerField(default=2)
    Ro_text= models.IntegerField(default=3)
    Ro_video= models.IntegerField(default=4)


class Content(models.Model):
    No=models.IntegerField(primary_key=True) # 컨텐츠 번호 -> 선착순
    Content_Type=(
        ('T','Text'),
        ('I','Image'),
        ('V','Video')
    )
    content_type=models.CharField(max_length=1,choices=Content_Type,help_text='T,I,V 중 1개 선택')
    Date_Start=models.DateTimeField(blank=True,null=True)
    Date_End= models.DateTimeField(blank=True,null=True)
    File_Text=models.CharField(max_length=45,null=True) # 업로드 될 컨텐츠의 파일
    File_Image = models.CharField(max_length=45,null=True)
    File_Video = models.CharField(max_length=45,null=True)


