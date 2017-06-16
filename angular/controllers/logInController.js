/**
 * Created by Admin on 15-Jun-17.
 */

angular.module('SignIn').controller("logInController",function($scope, $rootScope,  $http){



        this.submit = function(){

            // login with username and password
            $http(
                {
                    method:"POST",
                    url: "https://ieeespwd.herokuapp.com/api/users/"+ $scope.username,
                    data: {

                        "password": $scope.password
                    }
                }
            ).then(function successCallback(response) {

                // load home page
                window.location =  "homeIndex.html";

            }, function errorCallBack(response){

                // error load signUp page
                window.location = "index.html";
                alert("Invalid login details: Check again or  Sign Up");

            });
        };

    }
);
