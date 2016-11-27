angular.module('customFactories', [])
.factory('studentFactory', ['$http', function($http){
	var obj={};
	obj.getAllStudents= function(){
		return $http.get('/studentsData');
	}
	return obj;
}])