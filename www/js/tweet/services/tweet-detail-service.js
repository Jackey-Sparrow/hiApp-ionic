/**
 * Created by Jackey Li on 2015/8/20.
 */
(function (angular) {
    'use strict';

    /*
     * add comment service
     */
    angular.module(globalSettings.appName).factory('tweetDetailService',
        [function () {
            var service = {},
                scrollPosition = {
                    top: 0,
                    left: 0
                };

            /*
             * set scroll position
             */
            service.setScrollPosition = function (position) {
                scrollPosition = position;
            };

            /*
             * get scroll position
             */
            service.getScrollPosition = function () {
                return scrollPosition;
            };

            return service;
        }]);
})(angular);