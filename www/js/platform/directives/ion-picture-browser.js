/**
 * Created by Jackey Li on 2015/8/21.
 */
(function (angular) {
    'use strict';

    /*
     * ion picture browser
     *
     * @example
     *
     * <img src='' ion-picture-browser>
     */
    angular.module('ionic.extension').directive('ionPictureBrowser',
        ['$ionicModal', function ($ionicModal) {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attr) {

                    //element bind click event
                    element.bind('click', function () {
                        $ionicModal.fromTemplateUrl('js/platform/templates/ion-picture-browser.html', {
                            scope: scope,
                            animation: 'animated zoomInUp',
                            hideDelay: 1020
                        }).then(function (modal) {
                            scope.modal = modal;
                            scope.modal.show();
                        });
                    });


                    /*
                     * hide modal
                     */
                    scope.pictureBrowser = {
                        hide: function () {
                            scope.modal.hide();
                            scope.modal.remove();
                        },
                        imgUrl: attr.src
                    };

                    /*
                     * destroy
                     */
                    scope.$on('$destroy', function () {
                        scope.modal.remove();
                        element.unbind('click');
                    });
                }
            };
        }]);

    /*
     * picture browser controller
     */
    angular.module('ionic.extension').controller('pictureBrowserController',
        ['$scope',
            function ($scope) {
                $scope.back = function () {
                    $scope.pictureBrowser.hide();
                };

                $scope.imgUrl = $scope.pictureBrowser.imgUrl;
            }]);
})(angular);