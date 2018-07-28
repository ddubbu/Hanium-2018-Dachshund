from rest_framework.generics import GenericAPIView #mixins과 함께 CRUD 기능을 제공할 것이다.
from rest_framework import serializers , mixins
from api.models import Board, Content_Rotation #api파일 내의 models.py에서 class 2개 추출해 import

#개념#
# 시리얼라이저는 가져올 Model과 1:1이 되어 Dataase 언어를 Python으로 바꾸어준다.
# queryset은 가져올 대상이다. all이거나 one

#Serializer 작업

#models.py 내의 class Board 시리얼라이저
class Board_Serializer(serializers.ModelSerializer):
    class Meta :
        model = Board
        fields = '__all__'
        # 여기서 fields = 'name'으로 하면 한개만 추출됨.

#models.py 내의 class Content_Rotation 시리얼라이저
class Content_Rotation_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Content_Rotation
        fields = '__all__'
        # 여기서 fields = 'name'으로 하면 한개만 추출됨.

# DB model 한개씩과 - api 한개씩 연결하며 작업 생성-> by class(클래스로)/def(함수로)
class Board_api(GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin
    ,mixins.DestroyModelMixin,mixins.UpdateModelMixin,):
    #상속 5가지를 받는다.
    queryset = Board.objects.all()
    serializer_class = Board_Serializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.delete(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class Content_Rotation_api(GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin
    ,mixins.DestroyModelMixin,mixins.UpdateModelMixin,):
     # 상속 5가지를 받는다.
     queryset = Content_Rotation.objects.all()
     serializer_class = Content_Rotation_Serializer

     def get(self, request, *args, **kwargs):
         return self.list(request, *args, **kwargs)

     def post(self, request, *args, **kwargs):
         return self.create(request, *args, **kwargs)

     def delete(self, request, *args, **kwargs):
         return self.delete(request, *args, **kwargs)

     def put(self, request, *args, **kwargs):
         return self.update(request, *args, **kwargs)
