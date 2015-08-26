/**
 * Created by Jackey Li on 2015/8/16.
 */
(function (angular) {
    'use strict';

    /*
     * change language controller
     */
    angular.module('hiApp.language').controller('changeLanguageController',
        ['$scope', '$state', 'languageService', 'localStorageService', '$translate', '$timeout',
            function ($scope, $state, languageService, localStorageService, $translate, $timeout) {

                //get language from language service
                $scope.languages = languageService.getList();
                //$scope.languageId = $scope.languages[0].LanguageId;

                //translate
                $scope.languageTranslate = {
                    title: $translate.instant('language.title'),
                    switchLanguage: $translate.instant('language.switchLanguage')

                };

                //get localStorage userInfo
                var user = localStorageService.getUserInfo();
                if (!user) {
                    $state.go('login');
                }


                //$scope.chooseLanguage = languageService.getLanguageById(languageId);

                /*
                 * switch language
                 */
                $scope.changeLanguage = function (languageId) {
                    $scope.chooseLanguage = languageService.getLanguageById(languageId);
                    $translate.use($scope.chooseLanguage.languageTranslate);

                    //modify store userInfo
                    var language = $scope.chooseLanguage;
                    user.languageId = language.LanguageId;
                    user.language = language.language;
                    user.languageName = language.languageName;
                    user.languageTranslate = language.languageTranslate;
                    localStorageService.setUserInfo(user);
                };

                /*
                 * choose language done
                 */
                $scope.done = function () {
                    window.location.reload(true);
                    $state.go('tab.setting');

                };

                /*
                 * go back
                 */
                $scope.back = function () {
                    $state.go('tab.setting');
                };
            }]);
})(angular);