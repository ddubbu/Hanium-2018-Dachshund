app.controller("ContentController",
               ['$scope',
                '$rootScope',
                '$location',
                '$window',
                '$routeParams',
                'UserAuthFactory',
                'AuthenticationFactory',
                'RequestFactory',
    function ($scope, $rootScope, $location, $window, $routeParams,
             UserAuthFactory, AuthenticationFactory, RequestFactory) {

        $scope.isLogin = false
        $scope.items = [
            { a: 1 },
       
        ]

        //Board select ng-model 선언 및 사용
        //$scope.B_sel = ''

        $scope.inputData = {
            No: '',
            B_sel: '',
            T_sel: '',
            start_date: '',
            end_date: '',
            Title: '',
            //
            Main: ''
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
                itemTemplate: function (item) {
                    // return $sce.trustAsHtml(item.name+' ('+item.email+')');
                },
                labelTemplate: function (item) {
                    // return $sce.trustAsHtml(item.name);
                }
            }
        };



        if ($window.sessionStorage.user !== undefined) {
            $scope.isLogin = true
        }

        //ActionUpload 
        $scope.ActionUpload = function () {
            console.log('ActionUpload start')
            console.log($scope.inputData.No)
            console.log($scope.inputData.B_sel)
            console.log($scope.inputData.T_sel)
            console.log($scope.inputData.start_date)
            console.log($scope.inputData.end_date)
            console.log($scope.inputData.Title)
            console.log($scope.inputData.Main)
            let data = {
                no: $scope.inputData.No,
                b_sel: $scope.inputData.B_sel,
                t_sel: $scope.inputData.T_sel,
                s_date: $scope.inputData.start_date,
                e_date: $scope.inputData.end_date,
                title: $scope.inputData.Title,
                main: $scope.inputData.Main
                //maincontent

            }
            //console.log(data)
/*잠시
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
*/

            RequestFactory.put('/api/content/upload', data)
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

        }

        //ActionUpload 끝



        /*밑에 수정하자.
             $scope.actionDeleteBoard = function () {
                 console.log('real delete')
             }
     
     
             $scope.updateBoard = function (id) {
                 console.log(id)
             }
     
             $scope.actionUpdateBoard = function () {
                 console.log('real update')
             }
     */
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

        }
        //init끝


    }
               ]);
