/**
 * Created by Admin on 14-Jun-17.
 */

angular.module('SignIn',['ngRoute','ngAnimate']).config(
    
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "partials/signUp.html"
            })
            .when("/signUp", {
                templateUrl : "partials/signUp.html"

            })
            .when("/logIn", {
                templateUrl : "partials/login.html"
            }).otherwise({
            redirectTo : 'index.html'
        });
    }
    
    
);