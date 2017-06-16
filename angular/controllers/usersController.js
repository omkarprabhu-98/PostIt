/**
 * Created by Admin on 16-Jun-17.
 */

var userData = [];
angular.module('HomePage').controller("usersController",function($scope, $rootScope,  $http){


            $http(

                {
                    method: "GET",
                    url: "https://ieeespwd.herokuapp.com/api/users"

                }

            ).then(

                function successCallback(response){
                  userData = response.data;
                }
            );



    }


);
