/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';

    /*
     * language service
     */
    angular.module(globalSettings.appName).factory('languageService',
        ['$translate', function ($translate) {
            var service = {},
                languageList = [
                    {
                        LanguageId: 1,
                        LanguageName: $translate.instant('language.english'),
                        language: 'en',
                        culture: 'en-gb',
                        languageTranslate: 'en'
                    },
                    {
                        LanguageId: 2,
                        LanguageName: $translate.instant('language.chinese'),
                        language: 'cn',
                        culture: 'en-gb',
                        languageTranslate: 'cn'
                    }
                ];


            /*
             * get list
             */
            service.getList = function () {
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
                        return language;
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