/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';
    /*
     * add tweet controller
     */
    angular.module('hiApp.tweet').controller('addTweetController',
        ['$scope', '$translate', '$cordovaCamera', '$ionicAlert',
            function ($scope, $translate, $cordovaCamera, $ionicAlert) {

                $scope.title = $translate.instant('tweet.addTweet');
                $scope.somethingNew = $translate.instant('tweet.somethingNew');

                $scope.takeCamera = function () {
                    $scope.takePhoto();
                };

                $scope.takePhoto = function () {
                    try {
                        var options = {
                            destinationType: Camera.DestinationType.FILE_URI,
                            sourceType: Camera.PictureSourceType.CAMERA
                        };

                        $cordovaCamera.getPicture(options).then(function (imageUrl) {
                            var image = document.getElementById('myImage');
                            image.src = imageUrl;
                        }, function (err) {
                            $ionicAlert.alert($scope, 'warning', 'camera does not support', 3);
                        });
                    }
                    catch (ex) {
                        $ionicAlert.alert($scope, 'warning', 'camera does not support', 3);
                    }
                };

                $scope.selectPhoto = function () {

                };

                /*
                 * back
                 */
                $scope.back = function () {
                    $scope.modalFn.hideModal();
                };
            }

        ])
    ;
})(angular);