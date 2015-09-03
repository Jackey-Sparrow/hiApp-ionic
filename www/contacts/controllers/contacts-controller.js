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

                /**
                 * translate
                 * @type {{contactsName, search}}
                 */
                $scope.contactsTranslate = {
                    contactsName: $translate.instant('contacts.contactsName'),
                    search: $translate.instant('contacts.search')
                };

                /**
                 * get all contacts
                 */
                contactService.getAllContacts().then(function (data) {
                    $scope.contacts = data;
                }, function (error) {
                    console.log(error);
                });

                /**
                 * remove
                 * @param contact
                 */
                $scope.remove = function (contact) {
                    contactService.remove(contact);
                };
            }]);
})(angular);