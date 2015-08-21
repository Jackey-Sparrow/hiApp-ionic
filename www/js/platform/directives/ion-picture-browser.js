/**
 * Created by Jackey Li on 2015/8/21.
 */
(function (angular) {
    'use strict';

    angular.module('ionic.extension').directive('ionPictureBrowser',
        ['$ionicModal','$ionicPopover', function ($ionicModal,$ionicPopover) {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, link) {

                    $ionicModal.fromTemplateUrl('js/platform/templates/ion-picture-browser.html', {
                        scope: scope,
                        animation: 'slide-in-up'
                    }).then(function (modal) {
                        scope.modal = modal;
                    });

                    //$ionicPopup.show({
                    //    templateUrl:'js/platform/templates/ion-picture-browser.html',
                    //    scope:scope
                    //});

                    $ionicPopover.fromTemplateUrl('js/platform/templates/ion-picture-browser.html', {
                        scope: scope
                    }).then(function(popover) {
                        scope.popover = popover;
                    });

                    element.bind('click', function () {
                        console.log('click');
                        //scope.modal.show();
                        scope.popover.show();

                    });

                    scope.$on('$destroy', function () {
                        scope.modal.remove();
                        scope.popover.remove();
                    });

                }
            };
        }]);

    angular.module('ionic.extension').controller('pictureBrowserController',
        ['$scope',
            function ($scope) {

            }]);
})(angular);