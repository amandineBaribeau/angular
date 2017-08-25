'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstApp
 */
var myApp = angular.module('firstApp',[
	'carApp',
	'demoApp',
	'languageApp']);

  myApp.controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  
		
	



