'use strict';

/**
*  Module
*
* Description
*/
angular.module('MovieSearch').
controller('MoiveController', ['$scope','MovieSearchService', function($scope,MovieSearchService){
		$scope.search = function(){
			MovieSearchService.queryMovie($scope.name).
			then(function(data){
				$scope.movies = data;
			});
		};
		$scope.enterSearch = function(e){
			if(e.keyCode==13){
					$scope.search();
				}
		};
	}
]);