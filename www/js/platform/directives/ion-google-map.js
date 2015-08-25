/**
 * Created by Jackey Li on 2015/8/24.
 */
(function (angular) {
    'use strict';

    /*
     * ion google map directive
     *
     * @example
     *
     * <div data-ion-map></div>
     */
    angular.module('ionic.extension').directive('ionGoogleMap',
        ['$ionicModal', function ($ionicModal) {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attr) {

                    //element bind click event
                    element.bind('click', function () {
                        $ionicModal.fromTemplateUrl('js/platform/templates/ion-google-map.html', {
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

    /*
     * ionic map controller
     */
    angular.module('ionic.extension').controller('ionMapController', function ($scope, $ionicLoading, $compile, $timeout) {
        function initialize() {


            $scope.latlng = $scope.ionMap.latlng;
            //var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
            var myLatlng = new google.maps.LatLng($scope.latlng.lat, $scope.latlng.lng);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById('map'),
                mapOptions);

            //Marker + infowindow + angularjs compiled ng-click
            var contentString = '<div><a ng-click="clickTest()">Click me!</a></div>';
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Uluru (Ayers Rock)'
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });


            $scope.map = map;
        }

        $timeout(function () {
            // google.maps.event.addDomListener(window, 'load', initialize);
            if (document.readyState === 'complete') {
                initialize();
            } else {
                google.maps.event.addDomListener(window, 'load', initialize);
            }

        });
        $scope.centerOnMe = function () {
            if (!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function (pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.loading.hide();
            }, function (error) {
                alert('Unable to get location: ' + error.message);
                $scope.loading.hide();
            });
        };

        $scope.clickTest = function () {
            alert('Example of infowindow with ng-click')
        };

        $scope.back = function () {
            $scope.ionMap.hide();
        };


    });
})(angular);