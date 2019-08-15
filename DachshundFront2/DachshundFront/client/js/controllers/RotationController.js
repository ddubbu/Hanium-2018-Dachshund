app.controller("RotationController",
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

        if($window.sessionStorage.user !== undefined ){
            $scope.isLogin = true
        }

        
    }
]);
