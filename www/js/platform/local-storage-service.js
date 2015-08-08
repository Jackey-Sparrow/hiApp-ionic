/**
 * Created by Jackey Li on 2015/8/7.
 */
(function (angular) {
    'use strict';

    /*
     * local storage service
     */
    angular.module(globalSettings.appName).
        factory('localStorageService',
        ['$window',
            function ($window) {
                return {
                    set: function (key, value) {
                        $window.localStorage[key] = value;
                    },
                    get: function (key, defaultValue) {
                        return $window.localStorage[key] || defaultValue;
                    },
                    setObj: function (key, value) {
                        $window.localStorage[key] = JSON.stringify(value);
                    },
                    getObj: function (key) {
                        return JSON.parse($window.localStorage[key]) || [];
                    }
                }
            }]);
})(angular);