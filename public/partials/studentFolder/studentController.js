angular.module('myApp')
.controller('studentCtrl',['$scope','studentFactory', function ($scope,studentFactory) {
	studentFactory.getAllStudents().then(function(response){
		console.log(response);
	},function(error){
		console.log(error);
	})
}]);