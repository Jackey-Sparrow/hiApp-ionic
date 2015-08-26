/**
 * Created by Jackey Li on 15/8/25.
 */

(function (angular) {
    'use strict';

    /*
     * put the contacts router here
     */
    angular.module('hiApp.contacts', []).config(function ($stateProvider) {
        $stateProvider.state('tab.contacts', {
            url: '/contacts',
            views: {
                'tab-contacts': {
                    templateUrl: 'contacts/templates/contacts.html',
                    controller: 'contactsController'
                }
            }
        })
            .state('tab.contact-detail', {
                url: '/contacts/:contactId',
                views: {
                    'tab-contacts': {
                        templateUrl: 'contacts/templates/contact-detail.html',
                        controller: 'contactDetailController'
                    }
                }
            });
    });
})(angular);
