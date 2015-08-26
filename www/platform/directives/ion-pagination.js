/**
 * Created by Jackey Li on 2015/8/22.
 */
(function (angular) {
    'use strict';

    /*
     * ionPagination
     *
     * @example
     *
     * <ion-view></ion-view>
     *
     *
     * <div data-ion-pagination data-current-count="currentCount" data-total-count="totalCount" class="text-orange"></div>
     *
     * ps: put it under the ion-view
     * @example
     */
    angular.module('ionic.extension').directive('ionPagination', [function () {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                totalCount: '=',
                currentCount: '='
            },
            template:'<p class="ionPagination ">{{currentCount}} / {{totalCount}}</p>'
        };
    }]);
})(angular);