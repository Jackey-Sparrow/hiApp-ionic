/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';

    /*
     * language service
     */
    angular.module(globalSettings.appName).factory('languageService',
        ['$translate', 'localStorageService',
            function ($translate, localStorageService) {
                var service = {},
                    languageList = [
                        {
                            LanguageId: 1,
                            LanguageName: $translate.instant('language.english'),
                            language: 'en',
                            culture: 'en-gb',
                            languageTranslate: 'en',
                            selected: false
                        },
                        {
                            LanguageId: 2,
                            LanguageName: $translate.instant('language.chinese'),
                            language: 'cn',
                            culture: 'en-gb',
                            languageTranslate: 'cn',
                            selected: false
                        }
                    ];


                /*
                 * get list
                 */
                service.getList = function () {
                    var user = localStorageService.getUserInfo();
                    if (user) {
                        var languageId = user.languageId;
                        this.getLanguageById(languageId);
                    }
                    return languageList;
                };

                /*
                 * get language by languageId
                 */
                service.getLanguageById = function (Id) {
                    var len = languageList.length;
                    for (var i = 0; i < len; i++) {
                        var language = languageList[i];
                        if (language.LanguageId === Id) {
                            language.selected = true;
                            return language;
                        }else{
                            language.selected = false;
                        }
                    }
                };

                /*
                 *  refresh the translate language
                 *  todo: hard code, need to rewrite
                 */
                service.refreshLanguage = function () {
                    languageList[0].LanguageName = $translate.instant('language.english');
                    languageList[1].LanguageName = $translate.instant('language.chinese');
                };

                return service;
            }]);
})(angular);