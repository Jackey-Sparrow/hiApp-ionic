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

                //todo : add actionsheet here, 1 is for takePhoto, 2 is for select picture
                $scope.takeCamera = function () {
                    $scope.takePhoto();
                };

                /*
                 * take a new photo
                 */
                $scope.takePhoto = function () {
                    try {
                        var options = {
                            destinationType: Camera.DestinationType.FILE_URI,
                            sourceType: Camera.PictureSourceType.CAMERA
                        };

                        $cordovaCamera.getPicture(options).then(function (imageUrl) {
                            //var image = document.getElementById('myImage');
                            //image.src = imageUrl;
                        }, function () {
                            $ionicAlert.alert($scope, 'warning', 'camera does not support', 3);
                        });
                    }
                    catch (ex) {
                        $ionicAlert.alert($scope, 'warning', 'camera does not support', 3);
                    }
                };

                /*
                 * selet photo from photo
                 */
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