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

        $scope.user = {
            userId: 'admin',
            password: '111111' 
        };

        $scope.changepwuser = {
            userId: '',
            current_password: '',
            new_password: ''
        }


        $scope.init = function() {
            console.log('init')
        }

        $scope.clearError = function(){
            $scope.error = '';
        } 

        $scope.actionLogin = function() {


            let user = {
                userId: $scope.user.userId,
                password: $scope.user.password
            }


            RequestFactory.post('/login', user)
                          .then(function onSuccess(response) {
                                if (response.status === 200) {
                                    AuthenticationFactory.saveAuthentication({userId: $scope.user.userId});
                                    $rootScope.$broadcast('userLoggedIn');
                                    $location.path('/admin');
                                }
                                else {
                                    $scope.error = response.data.message;  
                                }
                                
                          }, function onError(response) {
                              $scope.error = response.data.message;
                          })
        }


        $scope.resetPassword = function() {
            $location.path('/resetPassword')
        }


        $scope.actionResetPassword = function() {

            let user = {
                userId: AuthenticationFactory.getAuthenticationInfo().userId,
                current_password: $scope.changepwuser.current_password,
                new_password: $scope.changepwuser.new_password
            }

            console.log(user)


            RequestFactory.put('/api/user', user)
                          .then(function onSuccess(response) {
                                if (response.status === 200) {
                                    console.log(response)
                                    
                                    //pw변경후 재로그인을 위한 login화면으로 이동
                                    $location.path('/login'); 
                                    AuthenticationFactory.deleteAuthentication()
                                    
                                }
                                else {
                                    $scope.error = response.data.message;  
                                }
                                
                          }, function onError(response) {
                              $scope.error = response.data.message;
                          })
        }
    }
]);
