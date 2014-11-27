'use strict';

angular.module('Book')
.factory('BooksService',['$http',function($http){
    
    function search_books(query){
       return $http({method: 'GET', url: 'http://localhost:8000/query_books?bookname='+query}).
        then(function(resp){
           return resp.data.books;
        })
    }

    return {
    	search_books:search_books
    }
  
}]);
