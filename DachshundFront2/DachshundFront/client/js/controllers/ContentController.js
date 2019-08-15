app.controller("ContentController",
               ['$scope', 
                '$rootScope',
                '$location', 
                '$window', 
                '$routeParams',                
                'UserAuthFactory',
                'AuthenticationFactory',
    function($scope, $rootScope, $location, $window, $routeParams,
             UserAuthFactory, AuthenticationFactory) {

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

        //Board select ng-model 선언 및 사용
        $scope.B_sel = ''
        $scope.start_date=''

        $scope.inputData = {
            enddate: ''
        }

        $scope.changeDate = function() {
            console.log($scope.inputData.enddate)
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

        




     
        $scope.ActionUpload = function () {
            console.log($scope.B_sel)
            console.log($scope.start_date)
        }



   /// 밑에 수정하자.
        $scope.actionDeleteBoard = function () {
            console.log('real delete')
        }


        $scope.updateBoard = function (id) {
            console.log(id)
        }

        $scope.actionUpdateBoard = function () {
            console.log('real update')
        }
    }
]);
