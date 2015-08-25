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
                        $ionicModal.fromTemplateUrl('js/platform/templates/ion-baidu-map.html', {
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
        ['$scope',
            function ($scope) {
                $scope.back = function () {
                    $scope.ionMap.hide();
                };
            }]);

    angular.module('ionic.extension').directive('appMap', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="allMap"></div>',
            scope: {
                center: '=',		// Center point on the map (e.g. <code>{ latitude: 10, longitude: 10 }</code>).
                markers: '=',	   // Array of map markers (e.g. <code>[{ lat: 10, lon: 10, name: "hello" }]</code>).
                width: '@',		 // Map width in pixels.
                height: '@',		// Map height in pixels.
                zoom: '@',		  // Zoom level (one is totally zoomed out, 25 is very much zoomed in).
                zoomControl: '@',   // Whether to show a zoom control on the map.
                scaleControl: '@',   // Whether to show scale control on the map.
                address: '@'
            },
            link: function (scope, element, attrs) {
                $timeout(function () {
                    var map;
                    // 百度地图API功能
                    map = new BMap.Map('allMap');
                    //map.addControl(new BMap.ZoomControl());
                    // 创建地址解析器实例
                    //var myGeo = new BMap.Geocoder();
                    // 将地址解析结果显示在地图上,并调整地图视野
                    //myGeo.getPoint(scope.address, function (point) {
                    //    if (point) {
                    //        map.centerAndZoom(point, 16);
                    //        map.addOverlay(new BMap.Marker(point));
                    //    }
                    //}, '');
                    var point = new BMap.Point(116.404, 39.915);
                    map.centerAndZoom(point, 15);
                });

            }
        };
    });
})(angular);
