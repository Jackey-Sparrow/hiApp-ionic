/**
 * Created by Jackey Li on 15/8/25.
 */

(function (angular) {
    'use strict';

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
                            lat: 43.07493,
                            lng: -89.381388
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
    angular.module('ionic.extension').controller('ionBaiduMapController',
        ['$scope', '$timeout',
            function ($scope, $timeout) {
                $scope.back = function () {
                    $scope.ionMap.hide();
                };


                $timeout(function () {
                    //instance
                    $scope.map = new BMap.Map('allMap');
                    //init map and set the center
                    var point = new BMap.Point(116.404, 39.915);
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
                    geolocation.getCurrentPosition(function(r){
                        if(this.getStatus() == BMAP_STATUS_SUCCESS){
                            var mk = new BMap.Marker(r.point);
                            $scope.map.addOverlay(mk);
                            $scope.map.panTo(r.point);
                            //alert('您的位置：'+r.point.lng+','+r.point.lat);
                        }
                        else {
                            alert('failed'+this.getStatus());
                        }
                    },{enableHighAccuracy: true});
                };
            }]);
})(angular);