/**
 * Created by Jackey Li on 15/8/27.
 */
(function (angular) {
    'use strict';

    /*
     * contacts http service
     */

    angular.module('hiApp.contacts').factory('contactHttpService',
        ['$http', '$q',
            function ($http, $q) {
                var service = {};

                /**
                 *
                 * @returns {*}
                 */
                service.getAllContacts = function () {
                    var defer = $q.defer();
                    $http.get('contacts/contacts.json').then(function (response) {
                        defer.resolve(response.data);
                    }, function (error) {
                        defer.reject(error);
                    });

                    return defer.promise;
                };

                return service;
            }]);
})(angular);