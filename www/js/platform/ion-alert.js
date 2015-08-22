/**
 * Created by Jackey Li on 2015/8/22.
 */
(function (angular) {
    'use strict';

    /*
     * ionicAlert factory
     *
     * this alert dialog will display after 3 seconds
     */
    angular.module('ionic.extension').factory('$ionicAlert',
        ['$ionicPopup', '$timeout',
            function ($ionicPopup, $timeout) {
                var service = {};

                service.alert = function (scope, title, message) {

                    var myPopup = $ionicPopup.show({
                        template: '<div class="messageBody">' + message + '</div>',
                        title: title,
                        scope: scope
                    });

                    $timeout(function () {
                        myPopup.close();
                    }, 3000);
                };

                return service;

            }]);
})(angular);