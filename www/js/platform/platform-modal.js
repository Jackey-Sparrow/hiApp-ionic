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

            service.hideModal = function () {
                scope.modal.hide();
                delete scope.modal;
            };

            //scope.$on('$destroy', function () {
            //    scope.modal.remove();
            //});

            return service;
        }]);
})(angular);