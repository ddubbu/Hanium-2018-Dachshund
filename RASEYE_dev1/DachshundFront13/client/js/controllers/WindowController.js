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
                        $scope.init_Rotation()
                        console.log('rotation 컴컴')

                    }
                    else {
                        $scope.error = response.data.message;
                    }

                }, function onError(response) {
                    $scope.error = response.data.message;
                })
        }
        
        $scope.init_Rotation = function () { //get board
            
            RequestFactory.get('/api/get/rotation/') 
            .then(function onSuccess(response) {
                if (response.status === 200) {
                   // console.log(response.data)
                    $scope.rotations = response.data[0] //배열식으로 item 변수에 할당됨.

                    //뒤에서 slide 부분에 적용하자.
                    $scope.rt=$scope.rotations.Ro_Text;
                    $scope.ri=$scope.rotations.Ro_Image;
                    $scope.rm=$scope.rotations.Ro_Media;
                    console.log("initt_BoardList ")
                    console.log($scope.rotations)
                    console.log( $scope.rt)
                }
                else {
                    $scope.error = response.data.message;
                }
    
            }, function onError(response) {
                $scope.error = response.data.message;
            })
    
        }
        //init 끝

        $scope.List_Image_src=["Images/NoImage.jpg"];
        $scope.List1_Image_src=["Images/NoImage.jpg"];
        $scope.List2_Image_src=[];
        $scope.List_Media_src=[];
        $scope.List_Text_Main=[];
        var iindex=0;
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
                    $scope.List_Image_src[iindex]=pickitem.Main;
                    iindex++;
                   // console.log('짝수 이미지 리스트에 넣는 중....')
/*
                    if(count==0){
                       // console.log('짝수 이미지 리스트에 넣는 중....')
                       // console.log(pickitem.Main)
                        $scope.List1_Image_src[evenindex]=pickitem.Main;
                        evenindex++;
                        count=1;
                        }
                    else{
                      //  console.log('홀수 이미지 리스트에 넣는 중....')
                        //console.log(pickitem.Main)
                        $scope.List2_Image_src[oddindex]=pickitem.Main;
                        oddindex++;
                        count=0;
                        }
                        */
                }
                else if(pickitem.Type=="Text"){
                   // console.log('텍스트 리스트에 넣는 중....')
                    
                    //fortext=[pickitem.Main,pickitem.Title]
                    $scope.List_Text_Main[tindex]=[pickitem.Title,pickitem.Main];
                    //console.log($scope.List_Text_Main[tindex])
                    tindex++;
                }
                else if(pickitem.Type=="Media"){
                   // console.log('미디어 리스트에 넣는 중....')
                   // console.log(pickitem.Main)
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
        }, 3000);//$scope.ri*1000);//-> 서버에서 받은 시간 넣음

        $("#slideshow2 > div:gt(0)").hide();

        setInterval(function() {
            //아직 시간 조절은 못함......
            //일단은 *$scope.List_Image_src.length 요건 추가해야함!
          $('#slideshow2 > div:first')
            .fadeOut()
            .next()
            .fadeIn()
            .end()
            .appendTo('#slideshow2');
        },3000);
       // }, ($scope.ri*1000));


////////////////
        $("#text_slideshow > div:gt(0)").hide();

        setInterval(function() {
            //아직 시간 조절은 못함......
            //일단은 *$scope.List_Image_src.length 요건 추가해야함!
          $('#text_slideshow > div:first')
            .fadeOut()
            .next()
            .fadeIn()
            .end()
            .appendTo('#text_slideshow');
        },3000);
       // }, $scope.rt*1000);

////////////////
        $("#media_slideshow > div:gt(0)").hide();

        setInterval(function() {
            //아직 시간 조절은 못함......
            //일단은 *$scope.List_Image_src.length 요건 추가해야함!
        $('#media_slideshow  > div:first')
            .fadeOut()
            .next()
            .fadeIn()
            .end()
            .appendTo('#media_slideshow');
        },30000); 
     //   }, $scope.rm*1000);

/////////////////////////////////////////////////////////////before/window를 위한 
    $scope.init_BoardList = function () { 
        console.log("init_BoardList 들어옴")
        RequestFactory.get('/api/get/window/boardlist') //get board
        .then(function onSuccess(response) {
            if (response.status === 200) {
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
                
        if(confirm('게시판 '+$scope.BoardName+'(으)로 이동합니다.')==true){
            //Board Name 으로 BoardType 가져오기
            RequestFactory.get('/api/get/boardT/'+$scope.BoardName) //get board
            .then(function onSuccess(response) {
                if (response.status === 200) {
                    $scope.dataBT = response.data[0].BoardT //json 상태?로 무튼, {변수:데이터} 이런꼴
                    console.log('보드타입은'+$scope.dataBT)

                    console.log('if문 3개 바로 전')
                    ///////////////////////////☆☆☆☆☆☆여기 if문으로 3가지 나누기 ☆☆☆☆☆
                    if($scope.dataBT =='CAFE') {
                        console.log('CAFE 택함');
                        $location.path('/window/cafe/'+$scope.BoardName);}
                    else if ($scope.dataBT =='SCHOOL') {
                        console.log('SCHOOL 택함')
                        $location.path('/window/school/'+$scope.BoardName);
                    }
                    else if ($scope.dataBT =='HOUSE') {
                        console.log('HOUSE 택함')
                        $location.path('/window/house/'+$scope.BoardName);
                    }
                }
                else {
                    $scope.error = response.data.message;
                }

            }, function onError(response) {
                $scope.error = response.data.message;
            })

        }
        else{
            return;
        }
        
        
    }
//add Board>>>>>>>>
    //addBoard 버튼 클릭하면 추가됨.
        $scope.B_type='' //선택한 Board Type CAFE/HOUSE/SCHOOL

        //before_window에서 board radio 버튼 클릭 하면
        $scope.B_typechoose= function () { 
            console.log('B_typechoose 들어옴')            
            $scope.BoardName = prompt( '게시판 이름을 적으세요!', '' );
            console.log($scope.BoardName)
            console.log($scope.B_type)
            $scope.addBoard($scope.BoardName,$scope.B_type);
            
            
        }
        
    //$scope.addB=''
    $scope.addBoard=function(addB, BT){
       // var obj = prompt('BoardName을 추가하시오 \n※단 존재하는거 추가하지 마시오.') //default 있으면 안됨..
        let data = {
            NewBoard: addB,
            isApproval: 0,
            BoardType : BT
        }
        console.log(data)
        
        RequestFactory.post('/api/board/add',data)
        .then(function onSuccess(response) {
            if (response.status === 200) {
                console.log('request start')
                $scope.error = ''
                //var B_type = prompt( 'Lorem ipsum dolor', '3' );
                //console.log(B_type)
                alert('Board 추가 완료!\n 승인대기 바랍니다.\n(예상소요시간 1일)')
                //$location.reload('/before/window') //추가된 게시판과 함께 게시
                //res.redirect("/before/window")
                $scope.init_BoardList()
                $location.path('/main')
            }
            else {
                console.log('request fail')
                $scope.error = response.data.message;
            }

        }, function onError(response) {
            console.log('request fail2')
            console.log(response)
            $scope.error = response.data.message;
        })

    }







    }

]);
