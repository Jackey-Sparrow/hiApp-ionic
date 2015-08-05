/**
 * Created by lja on 5/29/2015.
 */
(function (angular) {
    'use strict';

    /* jshint -W072 */ // many parameters because of dependency injection
    angular.module(globalSettings.appName).controller('loginController',
        ['$scope', '$state', '$http', 'loginService',
            function ($scope, $state, $http, loginService) {

                $scope.title = 'login';
                $scope.login = {
                    userName: '',
                    password: '',
                    error: '',
                    languageId: 2,
                    userNameLabel: 'UserName',
                    passwordLabel: 'Password',
                    languageLabel: 'Language',
                    loginLabel: 'Login'
                };
                $scope.languages = [
                    {
                        LanguageId: 2,
                        LanguageName: 'English',
                        language: 'en',
                        culture: 'en-gb',
                        languageTranslate: 'en'
                    },
                    {
                        LanguageId: 1,
                        LanguageName: 'German',
                        language: 'de',
                        culture: 'de-de',
                        languageTranslate: 'de'
                    },
                    {
                        LanguageId: 3,
                        LanguageName: 'German-de',
                        language: 'de-de',
                        culture: 'de-de',
                        languageTranslate: 'de-de'
                    },
                    {
                        LanguageId: 4,
                        LanguageName: 'English-US',
                        language: 'en-us',
                        culture: 'en-us',
                        languageTranslate: 'en-us'
                    },
                    {
                        LanguageId: 5,
                        LanguageName: 'Chinese',
                        language: 'en',
                        culture: 'en-gb',
                        languageTranslate: 'cn'
                    }
                ];

                $scope.changeLanguage = function () {

                };

            }
        ]);

    angular.module(globalSettings.appName).factory('loginService',
        ['$q', '$http',
            function ($q, $http) {

                return null;
            }]);

})(angular);