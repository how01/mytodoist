'use strict';

/**
 *  Module
 *
 * Description
 */
angular.module('Book')
   .controller('myBookController', ['$scope', '$route', 'BooksService',
		function($scope,$route,BooksService) {
			
			$scope.search  = function(){
			  BooksService.search_books($scope.bookname)
			 .then(function(data){
					$scope.books =data;
				});
			}
			$scope.enterSearch = function (e) {
				if(e.keyCode==13){
					$scope.search();
				}
			}
			BooksService.queryCategory().
			then(function(data){
				$scope.category = data;
			});
		}]);

/**
*  Module
*
* Description
*/
angular.module('Book')
  .directive('dtLink', [function () {
    return {
      restrict: 'A',
      scope:{
        myUrl:'@nametest',
        linkText:'@text'
      },
      link: function (scope, iElement, iAttrs) {
        
      },
      template:'<a href="{{myUrl}}">{{linkText}}</a>'
    };
  }])
  .directive('dtPlink', [function () {
    return {
      restrict: 'A',
      priority:10,
      scope:{
        myUrl:'@nametest',
        linkText:'@text'
      },
      link: function (scope, iElement, iAttrs) {
        
      },
      template:'<a href="{{myUrl}}">{{linkText}} priority one</a>'
    };
  }])