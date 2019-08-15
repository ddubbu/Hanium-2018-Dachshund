app.controller("ContentManageController",
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

  /*     $scope.items = [
          //  { a: 1 },
       
        ]*/

        $scope.checkFlag = false;

        if ($window.sessionStorage.user !== undefined) {
            $scope.isLogin = true
        }

        
        $scope.changeCheckBox = function (No) {
            for (i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].No != No)  continue;

               
                if ($scope.items[i].checked) {
                    $scope.items[i].checked = false;
                }
                else {
                    $scope.items[i].checked = true;
                }

                break;
            }
        }


        $scope.setAllChecked = function () {
            $scope.checkFlag = !$scope.checkFlag;

            for (i = 0; i < $scope.items.length; i++) {
                $scope.items[i].checked = $scope.checkFlag;
            }
        }

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
                            // $scope.setAllChecked(true);
                            console.log($scope.items)
                        }
                        else {
                            $scope.error = response.data.message;  
                        }
                        
                }, function onError(response) {
                    $scope.error = response.data.message;
            })
        }
    //init 끝

    
    //del 작업 시작
    $scope.actionDeleteBoard = function () {
        console.log($scope.checkList);
    }



     }
]);