app.controller("WindowController",
               ['$scope', 
                '$rootScope',
                '$location', 
                '$window', 
                '$routeParams',
                'UserAuthFactory',
                'AuthenticationFactory',
                'RequestFactory',
    function($scope, $rootScope, $location, $window, $routeParams,
             UserAuthFactory, AuthenticationFactory,RequestFactory) {

        $scope.isLogin = false
        
        //날짜 설정
        var today =new Date();
        $scope.Today= {
            year:today.getFullYear(),
            month:today.getMonth()+1,
            day: today.getDate(),
            hour: today.getHours(),
            min:today.getMinutes(), 
            sec:today.getSeconds()
        }
        $scope.Date1 = $scope.Today.year+'년'+ $scope.Today.month+'월'+ $scope.Today.day+'일';
        $scope.Time = $scope.Today.hour+'시'+ $scope.Today.month+'분'+ $scope.Today.day+'초';
        

        //->임의로 내가 설정함 -> 나중엔 라우터 파라미터로 받아오자
        $scope.BoardName = 1 

        //init 함수
        //서버 controller에서 BoardName에 해당하는 Content 가져오기.
        $scope.init_Content = function () {
           
            console.log($scope.BoardName)
            // console.log('파람스로 url');
            //★☆★☆★☆요건 나중에 주소로 넘기자.$scope.BoardName = $routeParams.Name

            RequestFactory.get('/api/content/manage/' + $scope.BoardName)
                .then(function onSuccess(response) {
                    if (response.status === 200) {
                        //console.log(response.data)                           
                        $scope.items = response.data //배열식으로 item 변수에 할당됨.
                        // $scope.setAllChecked(true);
                        console.log($scope.items)
                        PutImage(); //List_Image_src를 만드는 함수 호출함.
                    }
                    else {
                        $scope.error = response.data.message;
                    }

                }, function onError(response) {
                    $scope.error = response.data.message;
                })
        }
        //init 끝

        $scope.List_Image_src=[];
        $scope.List_Media_src=[];
        $scope.List_Text_Main=[];
        var index=0;
        var mindex=0;
        var tindex=0;

        function PutImage() {
            console.log('PutImage 들어옴');
            console.log($scope.items)
            for (i=0;i<$scope.items.length;i++){
                let pickitem=$scope.items[i];
                if(pickitem.Type=="Image"){
                    console.log('이미지 리스트에 넣는 중....')
                    console.log(pickitem.Main)
                    $scope.List_Image_src[index]=pickitem.Main;
                    index++;
                }
                else if(pickitem.Type=="Text"){
                    console.log('텍스트 리스트에 넣는 중....')
                    console.log(pickitem.Main)
                    $scope.List_Text_Main[index]=pickitem.Main;
                    tindex++;
                }
                else if(pickitem.Type=="Media"){
                    console.log('미디어 리스트에 넣는 중....')
                    console.log(pickitem.Main)
                    $scope.List_Media_src[index]=pickitem.Main;
                    mindex++;
                }
            }
        }
        




///////////slide를 위한 코드
        $("#slideshow > div:gt(0)").hide();

        setInterval(function() {
            //아직 시간 조절은 못함......
            //일단은 *$scope.List_Image_src.length 요건 추가해야함!
          $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(2000*$scope.List_Image_src.length)
            .end()
            .appendTo('#slideshow');
        }, 3000);














    }

]);
