'use strict';


angular.module('MovieSearch').
factory('MovieSearchService', ['$http',function ($http) {
	function queryMovie(name){
		return $http.get('http://127.0.0.1:8000/queryMovie/?name='+name)
		.then(function(resp){
			return resp.data.movies;
		});
	}

	return {
		queryMovie:queryMovie
	};
}]);
