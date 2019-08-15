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
             UserAuthFactory, AuthenticationFactory,RequestFactory) {

        $scope.isLogin = false

        var today =new Date();
        $scope.Today= {
            year:today.getFullYear(),
            month:today.getMonth()+1,
            day: today.getDate(),
            hour: today.getHours(),
            min:today.getMinutes(), 
            sec:today.getSeconds()
        }
        $scope.Date = $scope.Today.year+'년\t'+ $scope.Today.month+'월'+ $scope.Today.day+'일';
        $scope.Time = $scope.Today.hour+'시'+ $scope.Today.month+'분'+ $scope.Today.day+'초';

        
        //모아보기 클릭시
        $scope.now = function(){
            console.log($scope.Today)
        }
 
    }
]);
