angular.module('mean.system')
    .controller('SignupController', ['$scope', '$timeout', '$location', '$dialog', 'SignupService', function ($scope, $timeout, $location, $dialog, SignupService) {
        $scope.SignUp = {
            name:'',
            email: '',
            password: '',
            avatar: ''
        };

         $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        $scope.signUp = function(){            
             SignupService.signupUser($scope.SignUp)
                 .then(function (data) {
                     if (data){
                         $location.path('/');
                     }
                 });
        };
    }]);
