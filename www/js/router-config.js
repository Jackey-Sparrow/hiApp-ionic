/**
 * Created by Jackey Li on 2015/8/19.
 */
(function (angular) {
    'use strict';

    angular.module(globalSettings.appName).config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive

            .state('login', {
                url: '/login',
                templateUrl: 'js/login/templates/login.html',
                controller: 'loginController'
            })

            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:


            .state('tab.tweet', {
                url: '/tweet',
                views: {
                    'tab-tweet': {
                        templateUrl: 'js/tweet/templates/tweet.html',
                        controller: 'tweetController'
                    }
                }
            })

            .state('tab.tweet-detail', {
                url: '/tweet/:tweetId',
                views: {
                    'tab-tweet': {
                        templateUrl: 'js/tweet/templates/tweet-detail.html',
                        controller: 'tweetDetailController'
                    }
                }
            })

            .state('tab.contacts', {
                url: '/contacts',
                views: {
                    'tab-contacts': {
                        templateUrl: 'js/contacts/templates/contacts.html',
                        controller: 'contactsController'
                    }
                }
            })
            .state('tab.contact-detail', {
                url: '/contacts/:contactId',
                views: {
                    'tab-contacts': {
                        templateUrl: 'js/contacts/templates/contact-detail.html',
                        controller: 'contactDetailController'
                    }
                }
            })

            .state('tab.setting', {
                url: '/setting',
                views: {
                    'tab-setting': {
                        templateUrl: 'js/setting/templates/setting.html',
                        controller: 'settingController'
                    }
                }
            })

            .state('tab.changeLanguage', {
                url: '/setting/:changeLanguage',
                views: {
                    'tab-setting': {
                        templateUrl: 'js/language/templates/change-language.html',
                        controller: 'changeLanguageController'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

    })
})(angular);