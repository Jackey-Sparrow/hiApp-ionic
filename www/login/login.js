/**
 * Created by Jackey Li on 15/8/26.
 */
(function (angular) {
    'use strict';

    /*
     * login module
     */
    angular.module('hiApp.login', []).config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/templates/login.html',
                controller: 'loginController'
            });
    });
})(angular);