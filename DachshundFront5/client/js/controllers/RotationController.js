app.controller('LoginController', 
               ['$scope', 
                '$rootScope', 
                '$window', 
                '$location', 
                'UserAuthFactory', 
                'AuthenticationFactory',
                'RequestFactory',
    function($scope, 
             $rootScope, 
             $window, 
             $location, 
             UserAuthFactory, 
             AuthenticationFactory,
             RequestFactory) {

        $scope.error = '';

        

        //actionLogin        
        $scope.getKoreanWeather = function(num) {
            consol.log(num)
        }
    }
]);
