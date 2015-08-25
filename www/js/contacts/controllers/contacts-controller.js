/**
 * Created by Jackey Li on 2015/8/5.
 */
(function (angular) {
    'use strict';

    /*
     * contact controller
     */
    angular.module('hiApp.contacts').controller('contactsController',
        ['$scope', 'contactService', '$translate',
            function ($scope, contactService, $translate) {

                $scope.contactsTranslate = {
                    contactsName: $translate.instant('contacts.contactsName'),
                    search: $translate.instant('contacts.search')
                };

                $scope.contacts = contactService.all();
                $scope.remove = function (contact) {
                    contactService.remove(contact);
                };
            }]);
})(angular);