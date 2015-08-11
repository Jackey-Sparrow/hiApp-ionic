/**
 * Created by Jackey Li on 2015/8/5.
 */
(function (angular) {
    'use strict';

    /*
     * contact controller
     */
    angular.module(globalSettings.appName).controller('contactsController',
        ['$scope', 'contactService', function ($scope, contactService) {
            $scope.contacts = contactService.all();
            $scope.remove = function (contact) {
                contactService.remove(contact);
            };
        }]);
})(angular);