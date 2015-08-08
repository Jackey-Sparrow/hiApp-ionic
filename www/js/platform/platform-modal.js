/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';

    /*
     * modal service
     */
    angular.module(globalSettings.appName).factory('platformModal',
        ['$ionicModal', function ($ionicModal) {

            var service = {},
                scope;

            /*
             * set options and open the modal
             */
            service.openModal = function (options) {
                scope = options.scope;
                $ionicModal.fromTemplateUrl(options.templateUrl, {
                    scope: options.scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    scope.modal = modal;
                    modal.show();
                });
            };

            /*
             * hide modal and delete scope modal
             */
            service.hideModal = function () {
                scope.modal.hide();
                if (scope.modal) {
                    delete scope.modal;
                }
            };

            return service;
        }]);
})(angular);