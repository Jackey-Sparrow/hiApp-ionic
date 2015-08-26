/**
 * Created by Jackey Li on 2015/8/22.
 */
(function (angular) {
    'use strict';

    /*
     * ionicAlert factory
     *
     * this alert dialog will display after 3 seconds
     *
     * @example
     *
     * $ionicAlert.alert($scope,title,message,type);
     *
     * type: 1 success 2 info 3 warning 4 error
     *
     * @example
     */
    angular.module('ionic.extension').factory('$ionicAlert',
        ['$ionicPopup', '$timeout',
            function ($ionicPopup, $timeout) {
                var service = {};

                var alertType = {
                    success: {
                        icon: 'ion-checkmark-circled',
                        className: 'message-success'
                    },
                    info: {
                        icon: 'ion-information-circled',
                        className: 'message-info'
                    },
                    warning: {
                        icon: 'ion-alert-circled',
                        className: 'message-warning'
                    },
                    error: {
                        icon: 'ion-close-circled',
                        className: 'message-error'
                    }
                };

                service.alert = function (scope, title, message, type) {
                    var choosenType;
                    if (type > alertType.length) {
                        choosenType = alertType.info;
                    }
                    switch (type) {
                        case 1:
                            choosenType = alertType.success;
                            break;
                        case 2:
                            choosenType = alertType.info;
                            break;
                        case 3:
                            choosenType = alertType.warning;
                            break;
                        case 4:
                            choosenType = alertType.error;
                            break;

                    }


                    var myPopup = $ionicPopup.show({
                        template: '<div class="messageBody '+choosenType.className+'"><i class="message-icon icon ' + choosenType.icon +
                        ' "></i>' + message + '</div>',
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