/**
 * Created by Admin on 14-Jun-17.
 */



angular.module('SignIn').controller("signUpController",function($scope, $rootScope,  $http){



            this.submit = function(){

                // post sign up details to server
                $http(

                    {
                        method:"POST",
                        url: "https://ieeespwd.herokuapp.com/api/users",
                        data:{
                            "username": $scope.username,
                            "password": $scope.password,
                            "name": $scope.name,
                            "email": $scope.email

                        }

                    }

                ).then(function successCallback(response) {

                    // login with username and password
                    $http(
                        {
                            method:"POST",
                            url: "https://ieeespwd.herokuapp.com/api/users/"+ $scope.username,
                            data: {

                                "password": $scope.password
                            }
                        }
                    );

                    // load home page
                    window.location =  "homeIndex.html";
                }, function errorCallBack(response){

                    // error load signUp page
                    window.location = "index.html";
                    alert("Username exits");

                });
            };

    }
);

