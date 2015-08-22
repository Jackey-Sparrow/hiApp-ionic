/**
 * Created by Jackey Li on 2015/8/22.
 */
(function (angular) {
    'use strict';

    angular.module('ionic.extension').directive('ionPagination', [function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                totalCount: '=',
                currentCount: '='
            },
            template:'<div>789</div>',
            link: function () {

            }
        };
    }]);
})(angular);