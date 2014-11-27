'use strict';

/**
 *  Module
 *
 * Description
 */
angular.module('Book')
	.controller('myBookController', ['$scope', '$route','BooksService',
		function($scope,$route,BooksService) {
			
			$scope.search  = function(){
				BooksService.search_books($scope.bookname)
				.then(function(data){
					$scope.books =data;
				});
			}
		}
	]);