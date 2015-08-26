/**
 * Created by Jackey Li on 15/8/26.
 */
(function (angular) {
    'use strict';

    /*
     * setting module
     */
    angular.module('hiApp.setting', []).config(function ($stateProvider) {
        $stateProvider
            .state('tab.setting', {
                url: '/setting',
                views: {
                    'tab-setting': {
                        templateUrl: 'setting/templates/setting.html',
                        controller: 'settingController'
                    }
                }
            })

            .state('tab.changeLanguage', {
                url: '/setting/:changeLanguage',
                views: {
                    'tab-setting': {
                        templateUrl: 'language/templates/change-language.html',
                        controller: 'changeLanguageController'
                    }
                }
            });
    });

})(angular);