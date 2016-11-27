var app = angular.module('myApp', ['ui.router', 'ui.bootstrap','customFactories']);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
	function($stateProvider, $urlRouterProvider,$locationProvider) {

		$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "/partials/homeFolder/home.html",
			controller: 'homeCtrl'
		})
		.state('about', {
			url: "/about",
			templateUrl: "/partials/aboutFolder/about.html",
			controller: 'aboutCtrl'
		})
		.state('students', {
			url: "/students",
			templateUrl: "/partials/studentFolder/student.html",
			controller: 'studentCtrl'
		});
		$urlRouterProvider.otherwise("home");
		$locationProvider.html5Mode(true);
	}])