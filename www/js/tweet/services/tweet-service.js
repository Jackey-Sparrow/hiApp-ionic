/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';

    /*
     * tweet service
     */
    angular.module(globalSettings.appName).factory('tweetService',
        ['$q', '$http', function ($q, $http) {
            var service = {};

            /*
             * get tweet by pagination
             */
            service.getTweetByPagination = function (options) {
                var pageNumber = options.pageNumber,
                    pageSize = options.pageSize,
                    start = pageNumber * pageSize,
                    end = (pageNumber + 1) * pageSize,
                    defer = $q.defer();
                $http.post('js/tweet/tweet.json').then(function (response) {
                    defer.resolve(response.data.slice(start, end));
                }, function (error) {
                    console.log(error);
                });
                return defer.promise;
            };

            return service;
        }]);
})(angular);