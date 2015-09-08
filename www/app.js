/*
 *　app config
 */

var requireModules = [
    'ionic',
    'pascalprecht.translate',
    'ionic.extension',
    'hiApp.contacts',
    'hiApp.tweet',
    'hiApp.setting',
    'hiApp.language',
    'hiApp.login',
    'ngCordova'
];

angular.module('hiApp', requireModules)

    .run(function ($ionicPlatform, $rootScope) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
        $rootScope.$on('httpError', function () {
            console.log('401 http error ');
        });

    }).config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'app/templates/tabs.html'
            });

        // Each tab has its own nav history stack:

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

    });


angular.module('hiApp').factory('httpInterceptor',
    ['$q', '$rootScope', function ($q, $rootScope) {
        var interptor = {
            'responseError': function (response) {
                if (response.status === 401) {
                    $rootScope.$emit('httpError', response);
                    return;
                }
            }
        };
        return interptor;
    }]);

angular.module('hiApp').config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
});