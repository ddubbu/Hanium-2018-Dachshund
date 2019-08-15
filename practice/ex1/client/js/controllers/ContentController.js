app.controller("ContentController",
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
        $scope.items = [
            {a: 1},
        ]



        $scope.inputData = {
            No : '',
            B_sel :'',
            T_sel :'',
            start_date:'',
            end_date: '',
            Title :'',
            //
            Main: ''
        }

        $scope.BNSelect = ''

        $scope.manage_text_selB = function(){
            
        }
/*

        $scope.inputData = {
            enddate: ''
        }

        $scope.changeDate = function() {
            console.log($scope.inputData.enddate)
        }
*/
        $scope.updateBoard = function (item, isYN) {
            $scope.item.IsApproval = angular.copy(isYN)
            console.log($scope.upItem)
        }

        $scope.multiselect = {
            selected: [],
            options: [],
            config: {
              hideOnBlur: false,
              showSelected: false,
              itemTemplate: function(item){
                // return $sce.trustAsHtml(item.name+' ('+item.email+')');
              },
              labelTemplate: function(item){
                // return $sce.trustAsHtml(item.name);
              }
            }
          };


        if($window.sessionStorage.user !== undefined ){
            $scope.isLogin = true
        }

        

    //ActionUpload 
        $scope.ActionUpload = function () {
            console.log('ActionUpload start')
            let data = {
                no : $scope.inputData.No,
                b_sel : $scope.inputData.B_sel,
                t_sel : $scope.inputData.T_sel,
                s_date: $scope.inputData.start_date,
                e_date: $scope.inputData.end_date,
                title :$scope.inputData.Title,
                main :$scope.inputData.Main
                //maincontent

            }
            //console.log(data)

            //post
            RequestFactory.post('/api/content/upload', data)
                .then(function onSuccess(response) {
                    if (response.status === 200) {
                        console.log('request start')
                        //console.log(response)
                        //$scope.init3() //리로딩..
                        //$scope.location = ''
                    }
                    else {
                        console.log('request fail')
                        $scope.error = response.data.message;
                    }

                }, function onError(response) {
                    console.log('request fail2')
                    $scope.error = response.data.message;
                })
            //post
        }
        //ActionUpload 끝

      //init 함수
        //서버 controller에서 new data 가져오기.
        $scope.init3 = function () {
            console.log("init3")
            RequestFactory.get('/api/content/upload')
                .then(function onSuccess(response) {
                        if (response.status === 200) {
                            //console.log(response.data)
                            $scope.items = response.data //배열식으로 item 변수에 할당됨.
                            //console.log($scope.items)
                        }
                        else {
                            $scope.error = response.data.message;  
                        }
                        
                }, function onError(response) {
                    $scope.error = response.data.message;
            })

            
            RequestFactory.get('/api/content')
            .then(function onSuccess(response) {
                    if (response.status === 200) {
                        console.log(response.data)
                        $scope.items = response.data //배열식으로 item 변수에 할당됨.
                        console.log($scope.items)
                        console.log($scope.inputData.B_sel)
                    }
                    else {
                        $scope.error = response.data.message;  
                    }
                    
            }, function onError(response) {
                $scope.error = response.data.message;
        })

    }//init끝


    //init 함수
        //서버 controller에서 new data 가져오기.
        $scope.init_Main = function () {
            RequestFactory.get('/api/content/manage')
                .then(function onSuccess(response) {
                        if (response.status === 200) {
                            //console.log(response.data)
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
    //init 끝
    

    }
]);
