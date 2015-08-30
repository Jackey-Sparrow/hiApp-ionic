/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';
    /*
     * add tweet controller
     */
    angular.module('hiApp.tweet').controller('addTweetController',
        ['$scope', '$translate', '$cordovaCamera',
            function ($scope, $translate, $cordovaCamera) {

                $scope.title = $translate.instant('tweet.addTweet');
                $scope.somethingNew = $translate.instant('tweet.somethingNew');

                $scope.takeCamera = function () {
                    $scope.takePhoto();
                };

                $scope.takePhoto = function () {
                    var options = {
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA
                    };

                    $cordovaCamera.getPicture(options).then(function (imageUrl) {
                        var image = document.getElementById('myImage');
                        image.src = imageUrl;
                    }, function (err) {
                        // error
                        alert(err);
                    });
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