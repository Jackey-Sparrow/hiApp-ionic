/**
 * Created by Jackey Li on 15/8/25.
 */

(function (angular) {
    'use strict';

    /*
     * ion-baidu-map directive
     *
     * @example
     *
     * <i ion-baidu-map class="ion-ios-location-outline text-orange" lat="xxx" lng="xxx"></i>
     *
     * @example
     */
    angular.module('ionic.extension').directive('ionBaiduMap',
        ['$ionicModal', function ($ionicModal) {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attr) {

                    //element bind click event
                    element.bind('click', function () {
                        $ionicModal.fromTemplateUrl('platform/templates/ion-baidu-map.html', {
                            scope: scope,
                            animation: 'animated bounceInRight',
                            hideDelay: 1020
                        }).then(function (modal) {
                            scope.modal = modal;
                            scope.modal.show();
                        });
                    });


                    /*
                     * hide modal
                     */
                    scope.ionMap = {
                        hide: function () {
                            scope.modal.hide();
                            scope.modal.remove();
                        },
                        latlng: {
                            lat: attr.lat,
                            lng: attr.lng
                        }
                    };


                    /*
                     * destroy
                     */
                    scope.$on('$destroy', function () {
                        if (scope.modal) {
                            scope.modal.remove();
                        }
                        element.unbind('click');
                    });
                }
            };
        }]);

    /*
     * ion baidu map controller
     *
     */
    angular.module('ionic.extension').controller('ionBaiduMapController',
        ['$scope', '$timeout', '$ionicAlert',
            function ($scope, $timeout, $ionicAlert) {
                $scope.back = function () {
                    $scope.ionMap.hide();
                };


                $timeout(function () {
                    //instance
                    $scope.map = new BMap.Map('allMap');
                    //init map and set the center
                    var point = new BMap.Point($scope.ionMap.latlng.lat, $scope.ionMap.latlng.lng);
                    $scope.map.centerAndZoom(point, 15);
                    //map type control
                    $scope.map.addControl(new BMap.MapTypeControl());
                    //open zoom
                    //map.enableScrollWheelZoom(true);

                    var marker = new BMap.Marker(point);
                    $scope.map.addOverlay(marker);
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                });

                $scope.centerOnMe = function () {
                    var geolocation = new BMap.Geolocation();
                    geolocation.getCurrentPosition(function (r) {
                        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                            var mk = new BMap.Marker(r.point);
                            $scope.map.addOverlay(mk);
                            $scope.map.panTo(r.point);
                            //alert('您的位置：'+r.point.lng+','+r.point.lat);
                        }
                        else {
                            $ionicAlert.alert($scope, 'error', 'get location error', 4);
                        }
                    }, {enableHighAccuracy: true});
                };
            }]);
})(angular);
