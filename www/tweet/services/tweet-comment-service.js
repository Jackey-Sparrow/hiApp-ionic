/**
 * Created by Jackey Li on 2015/8/18.
 */
(function (angular) {
    'use strict';

    /*
     * tweet comment service
     */
    angular.module('hiApp.tweet').factory('tweetCommentService',
        ['$http', '$q',
            function ($http, $q) {
                var service = {},
                    list = [];//may use data buffer, but now just let it be

                service.getCommentByTweetId = function (tweetId) {
                    var defer = $q.defer();
                    $http.get('tweet/comments.json').then(function (response) {
                        list = response.data;
                        var result = list.filter(function (item) {
                            return item.tweetId === tweetId;
                        });
                        defer.resolve(result);
                    }, function (error) {
                        //todo:show error
                        console.log(error);
                        defer.reject(error);
                    });

                    return defer.promise;

                };


                return service;
            }]);
})(angular);