"use strict";angular.module("recallApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial","lumx"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("recallApp").controller("MainCtrl",["$scope","$http",function(a,b){a.selected={},b.get("scripts/stations.json").success(function(b){a.stations=b,a.stationNames=[],angular.forEach(b,function(b,c){a.stationNames.push(c)})}),a.$watch("selected.village + selected.neighborhood",function(){if(delete a.selected.station,a.stations){var b=a.stations[a.selected.village];b&&angular.forEach(b.stations,function(b){return 0===b.range.length?void(a.selected.station=b):void angular.forEach(b.range,function(c){return c===parseInt(a.selected.neighborhood)?void(a.selected.station=b):void 0})})}})}]).filter("encodeURIComponent",["$window",function(a){return a.encodeURIComponent}]);