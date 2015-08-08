/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';

    /*
     * language service
     */
    angular.module(globalSettings.appName).factory('languageService',
        [function () {
            var service = {},
                languageList = [
                    {
                        LanguageId: 1,
                        LanguageName: 'English',
                        language: 'en',
                        culture: 'en-gb',
                        languageTranslate: 'en'
                    },
                    {
                        LanguageId: 2,
                        LanguageName: 'Chinese',
                        language: 'en',
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

            return service;
        }]);
})(angular);