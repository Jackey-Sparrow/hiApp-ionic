/**
 * Created by lja on 5/29/2015.
 */
(function (angular) {
    'use strict';

    /* jshint -W072 */ // many parameters because of dependency injection
    angular.module('hiApp.login').controller('loginController',
        ['$scope', '$state', '$http', 'loginService', '$translate', 'basicControllerService', 'languageService', 'localStorageService',
            function ($scope, $state, $http, loginService, $translate, basicControllerService, languageService, localStorageService) {

                $scope.login = {
                    userName: '',
                    password: '',
                    error: '',
                    languageId: 1,
                    userNameLabel: $translate.instant('login.userName'),
                    passwordLabel: $translate.instant('login.password'),
                    languageLabel: $translate.instant('login.language'),
                    loginLabel: $translate.instant('login.login'),
                    loginFn: function () {
                        var language = $scope.chooseLanguage;
                        //a fake login loading
                        $scope.showLoading();
                        setTimeout(function () {
                            localStorageService.setUserInfo({
                                userName: $scope.login.userName,
                                password: $scope.login.password,
                                languageId: language.LanguageId,
                                language: language.language,
                                languageName: language.LanguageName,
                                languageTranslate: language.languageTranslate
                            });
                            $scope.hideLoading();
                            $state.go('tab.tweet');
                        }, 2000);
                    }
                };

                //get localStorage userInfo
                var user = localStorageService.getUserInfo();
                if (user) {
                    $scope.login.userName = user.userName;
                    $scope.login.password = user.password;
                    $scope.login.languageId = user.languageId;
                }

                //set the language
                $scope.chooseLanguage = languageService.getLanguageById($scope.login.languageId);

                //extend basic controller
                basicControllerService.initController($scope);

                //get language from language service
                $scope.languages = languageService.getList();

                /*
                 * change language and reset the translate setting
                 */
                $scope.changeLanguage = function () {
                    $scope.chooseLanguage = languageService.getLanguageById($scope.login.languageId);
                    //change the language setting
                    $translate.use($scope.chooseLanguage.languageTranslate);
                    $scope.login.userNameLabel = $translate.instant('login.userName');
                    $scope.login.passwordLabel = $translate.instant('login.password');
                    $scope.login.languageLabel = $translate.instant('login.language');
                    $scope.login.loginLabel = $translate.instant('login.login');
                    //set the language translate
                    languageService.refreshLanguage();
                };

            }
        ]);

    angular.module(globalSettings.appName).factory('loginService',
        [
            function () {

                return null;
            }]);

})(angular);