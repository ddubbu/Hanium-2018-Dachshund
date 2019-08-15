app.controller("ContentController",
               ['$scope',
                '$rootScope',
                '$location',
                '$window',
                '$routeParams',
                'Upload',
                'UserAuthFactory',
                'AuthenticationFactory',
                'RequestFactory',
    function ($scope, $rootScope, $location, $window, $routeParams, Upload,
             UserAuthFactory, AuthenticationFactory, RequestFactory) {


        $scope.isLogin = false
        $scope.items = [
            { a: 1 },
       
        ]
        

        $scope.inputData = {
            No: '',
            B_sel: '',
            T_sel: '',
            start_date: '',
            end_date: '',
            Title: '',
            //
            Main: '',
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

        /*
        * 파일 업로드
        * $scope.files에 해당되는 파일을 업로드
        * 응답으로 업로드된 url을 받는다.
        */
        $scope.upload = function (files) {

            /*
            * $scope.files에 셋팅된 데이터를 서버로 전송합니다.
            */ 
            Upload.upload({
                url: '/api/upload',
                data: {files: files}
            }).then(function (resp) {
                console.log('targetUrl : ' + resp.data);
                
                /*
                * 정상적으로 파일이 전송된 경우 서버에서 targetUrl 정보를 전송합니다.
                * targetUrl 정보를 이용하여 사용자에게 이미지나 동영상을 미리 보여주면 됩니다.         * 
                */ 
                $scope.targetUrl = resp.data;
                console.log($scope.targetUrl)

            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ');
            });
        };

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
                main: $scope.targetUrl,
                //maincontent

            }
            //console.log(data)
/*
            if ($scope.inputData.Main===true) {
                $scope.ActionfileUpload();
            */
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

        }
        //init끝


       $scope.BoardName = ''

        //init 함수
        //서버 controller에서 Main 가져오기.
        $scope.init_Main = function () {
            console.log('파람스로 url');
            $scope.BoardName = $routeParams.Name

            RequestFactory.get('/api/content/manage/'+$scope.BoardName)
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
