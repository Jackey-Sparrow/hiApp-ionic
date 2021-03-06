/**
 * Created by Jackey Li on 2015/8/11.
 */
(function (angular) {
    'use strict';

    /*
     * contact service
     */
    angular.module('hiApp.contacts').factory('contactService',
        ['$q', 'contactHttpService',
            function ($q, contactHttpService) {


                // Some fake testing data
                var service = {},
                    contacts = [];

                /*
                 *
                 */
                service.getAllContacts = function () {
                    var defer = $q.defer();
                    contactHttpService.getAllContacts().then(function (data) {
                        contacts = data;
                        defer.resolve(data);
                    }, function (error) {
                        defer.reject(error);
                    });
                    return defer.promise;
                };

                /*
                 * get contact by id
                 */
                service.getContactById = function (contactId) {
                    for (var i = 0; i < contacts.length; i++) {
                        if (contacts[i].id === parseInt(contactId)) {
                            return contacts[i];
                        }
                    }
                    return null;
                };

                /*
                 * remove contact
                 */
                service.remove = function (contact) {
                    contacts.splice(contacts.indexOf(contact), 1);
                };

                return service;
            }]);
})(angular);