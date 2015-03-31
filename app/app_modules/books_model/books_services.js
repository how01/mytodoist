'use strict';

angular.module('Book')
.factory('BooksService',['$http',function($http){
    
    function search_books(query){
       return $http({method: 'GET', url: 'http://127.0.0.1:8000/query_books/?bookname='+query}).
        then(function(resp){
           return resp.data.books;
        })
    }

    function queryCategory(){
      return $http({method: 'GET', url: 'http://127.0.0.1:8000/queryCategory/'}).
        then(function(resp){
          return resp.data.category;
        });
    }
    return {
    	search_books:search_books,
    	queryCategory:queryCategory
    }
  
}]);
