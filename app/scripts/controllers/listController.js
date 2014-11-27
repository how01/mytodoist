'use strict';

/**
 *  Module
 *
 * Description
 */
angular.module('myList')
	.controller('myListController', ['$scope', '$route','BooksService',
		function($scope,$route,BooksService) {
			
			BooksService.search_books()
			.then(function(data){
				$scope.books =data;
			})
		}
	]);