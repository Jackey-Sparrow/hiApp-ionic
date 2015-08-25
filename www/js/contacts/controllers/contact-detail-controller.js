/**
 * Created by Jackey Li on 2015/8/11.
 */
(function (angular) {
    'use strict';

    /*
     * contact detail controller
     */
    angular.module('hiApp.contacts').controller('contactDetailController',
        ['$scope', '$stateParams', 'contactService', '$state',
            function ($scope, $stateParams, contactService, $state) {

                $scope.contact = contactService.get($stateParams.contactId);

                /*
                 * back
                 */
                $scope.back = function () {
                    $state.go('tab.contacts');
                };
            }]);

})(angular);