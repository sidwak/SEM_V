var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "typeshit1.html",
    })
    .when("/navbarpage", {
      templateUrl: "typeshit2.html",
    })
    .when("/green", {
      templateUrl: "green.htm",
    })
    .when("/blue", {
      templateUrl: "blue.htm",
    });
});
