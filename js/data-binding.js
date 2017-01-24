/**
 * @author Hiraman Patil
 * @Created - 18 Jan 2017
 * @Updated - 18 Jan 2017
 */

var myApp = angular.module("myApp", []);

	myApp.controller("DataBindingCtrl", function($scope){
			$scope.name = "MrDiamond";    
			$scope.yourName = function(){
			return "What is your name?"
        }    
    });

