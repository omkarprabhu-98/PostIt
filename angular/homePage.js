/**
 * Created by Admin on 15-Jun-17.
 */


angular.module('HomePage',['ngRoute']).config(

    function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "partials/usersPage.html"
            })
            .when("/users", {
                templateUrl : "partials/usersPage.html"

            });
    }


);