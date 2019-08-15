app.controller("RotationController",
               ['$scope', 
                '$rootScope',
                '$location', 
                '$window', 
                '$routeParams',
                'UserAuthFactory',
                'AuthenticationFactory',
                'RequestFactory',
    function($scope, $rootScope, $location, $window, $routeParams,
             UserAuthFactory, AuthenticationFactory, RequestFactory) {

        $scope.isLogin = false
        $scope.items = [
            {a: 1},
            {a: 2},
            {a: 3},
            {a: 1},
            {a: 1},
            {a: 1},
            {a: 1},
            {a: 1},
            {a: 1},
            {a: 1},
        ]

        //ContentRotation
        $scope.ro = {
            Text :'',
            Image : '',
            Media :''

        }        

        if($window.sessionStorage.user !== undefined ){
            $scope.isLogin = true
        }


        //save 버튼 누르면 저장됨.
        $scope.actionSaveRotation = function(){

            let data = {
                Text : $scope.ro.Text,
                Image : $scope.ro.Image,
                Media : $scope.ro.Media
            }
            console.log('Hello')
            console.log(data)
            RequestFactory.put('/api/content/rotation',data)
                .then(function onSuccess(response) {
                        if (response.status === 200) {
                            
                            console.log(response)
                            $scope.init2() //리로딩..
                        }
                        else {
                            $scope.error = response.data.message;  
                        }
                        
                }, function onError(response) {
                    $scope.error = response.data.message;
            })

        }

        //init 함수
        //서버 controller에서 new data 가져오기.
        $scope.init2 = function () {
            RequestFactory.get('/api/content/rotation')
                .then(function onSuccess(response) {
                        if (response.status === 200) {
                            console.log(response.data)
                            $scope.items = response.data //배열식으로 item 변수에 할당됨.
                            //console.log($scope.items)
                        }
                        else {
                            $scope.error = response.data.message;  
                        }
                        
                }, function onError(response) {
                    $scope.error = response.data.message;
            })
        }
        //init()끝
        
    }
]);
