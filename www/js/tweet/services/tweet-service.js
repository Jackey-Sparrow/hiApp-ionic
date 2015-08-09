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
            var service = {},
                list = [];

            /*
             * set tweet list
             */
            service.setList = function (data) {
                list = data;
            };

            /*
             * get tweet list
             */
            service.getList = function () {
                return list;
            };

            /*
             * get tweet by Id
             */
            service.getTweetById = function (id) {
                var mapElement = list.filter(function (item) {
                    return item.id === id;
                });
                if (mapElement.length) {
                    return mapElement[0];
                }
                return null;
            };

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