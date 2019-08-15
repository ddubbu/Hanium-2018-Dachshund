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
        $scope.BoardName = ''
        

        //init 함수
        //서버 controller에서 BoardName에 해당하는 Content 가져오기.
        $scope.init_Content = function () {
            $scope.BoardName = $routeParams.Name
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
        
        $scope.init_Rotation = function () { 
            console.log("initt_BoardList ")
            RequestFactory.get('/get/rotation') //get board
            .then(function onSuccess(response) {
                if (response.status === 200) {
                   // console.log(response.data)
                    $scope.rotations = response.data //배열식으로 item 변수에 할당됨.
                    
                    console.log($scope.rotations)
                }
                else {
                    $scope.error = response.data.message;
                }
    
            }, function onError(response) {
                $scope.error = response.data.message;
            })
    
        }
        //init 끝

        
        $scope.List1_Image_src=[];
        $scope.List2_Image_src=[];
        $scope.List_Media_src=[];
        $scope.List_Text_Main=[];
        var evenindex=0;
        var oddindex=0;
        var mindex=0; //왜 호출 안됨?? 힝...
        var tindex=0;
        var count=0;
        //var fortext=[];
        function PutImage() {
            console.log('PutImage 들어옴');
            console.log($scope.items)
            for (i=0;i<$scope.items.length;i++){
                let pickitem=$scope.items[i];
                if(pickitem.Type=="Image"){
                    if(count==0){
                        console.log('짝수 이미지 리스트에 넣는 중....')
                        console.log(pickitem.Main)
                        $scope.List1_Image_src[evenindex]=pickitem.Main;
                        evenindex++;
                        count=1;
                        }
                    else{
                        console.log('홀수 이미지 리스트에 넣는 중....')
                        console.log(pickitem.Main)
                        $scope.List2_Image_src[oddindex]=pickitem.Main;
                        oddindex++;
                        count=0;
                        }
                }
                else if(pickitem.Type=="Text"){
                    console.log('텍스트 리스트에 넣는 중....')
                    
                    //fortext=[pickitem.Main,pickitem.Title]
                    $scope.List_Text_Main[tindex]=[pickitem.Title,pickitem.Main];
                    console.log($scope.List_Text_Main[tindex])
                    tindex++;
                }
                else if(pickitem.Type=="Media"){
                    console.log('미디어 리스트에 넣는 중....')
                    console.log(pickitem.Main)
                    $scope.List_Media_src[mindex]=pickitem.Main;
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
            .fadeOut()//1
            .next()
            .fadeIn()//6
            .end()
            .appendTo('#slideshow');
        }, 3000);//3

        $("#slideshow2 > div:gt(0)").hide();

        setInterval(function() {
            //아직 시간 조절은 못함......
            //일단은 *$scope.List_Image_src.length 요건 추가해야함!
          $('#slideshow2 > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(2000*$scope.List2_Image_src.length)
            .end()
            .appendTo('#slideshow2');
        }, 3000);


////////////////
        $("#text_slideshow > div:gt(0)").hide();

        setInterval(function() {
            //아직 시간 조절은 못함......
            //일단은 *$scope.List_Image_src.length 요건 추가해야함!
          $('#text_slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#text_slideshow');
        }, 3000);

////////////////
        $("#media_slideshow > div:gt(0)").hide();

        setInterval(function() {
            //아직 시간 조절은 못함......
            //일단은 *$scope.List_Image_src.length 요건 추가해야함!
        $('#media_slideshow  > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#media_slideshow');
        }, 9000);

/////////////////////////////////////////////////////////////before/window를 위한 
    $scope.init_BoardList = function () { 
        console.log("initt_BoardList ")
        RequestFactory.get('/api/get/boardlist') //get board
        .then(function onSuccess(response) {
            if (response.status === 200) {
               // console.log(response.data)
                $scope.items = response.data //배열식으로 item 변수에 할당됨.
                
                console.log($scope.items)
            }
            else {
                $scope.error = response.data.message;
            }

        }, function onError(response) {
            $scope.error = response.data.message;
        })

    }

    //before_window에서 board radio 버튼 클릭 하면
    $scope.windowchoose= function (name) { 
        console.log('windowchoose 들어옴')
        $scope.BoardName = name
        console.log($scope.BoardName)
        if(confirm('게시판'+$scope.BoardName+'로 이동합니다.')==true){
            $location.path('/window/'+$scope.BoardName);
        }
        else{
            return;
        }
        
    }

    //addBoard 버튼 클릭하면 추가됨.
    $scope.addB=''
    $scope.addBoard=function(){
       // var obj = prompt('BoardName을 추가하시오 \n※단 존재하는거 추가하지 마시오.') //default 있으면 안됨..
        let data = {
            addB: $scope.addB,
            isApproval: 0
        }
        console.log(data)
        
        RequestFactory.post('/api/board/add',data)
        .then(function onSuccess(response) {
            if (response.status === 200) {
                console.log('request start')
                $scope.error = ''
                alert('Board 추가 완료!\n 승인대기 바랍니다.\n(예상소요시간 1일)')
                $location.path('/window') //추가된 게시판과 함께 게시

            }
            else {
                console.log('request fail')
                $scope.error = response.data.message;
            }

        }, function onError(response) {
            console.log('request fail2')
            $scope.error = response.data.message;
        })

    }







    }

]);
