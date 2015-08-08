/**
 * Created by Jackey Li on 2015/8/8.
 */
(function (angular) {
    'use strict';
    angular.module(globalSettings.appName).factory('tweetService',
        [function () {
            var service = {};

            /*
             * get list
             */
            service.getList = function () {
                var list = [
                    {
                        name: 'Jackey Li',
                        icon: 'img/avatar/avatar01.jpg',
                        insertDate: 'November 05, 1955',
                        content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,' +
                        'the content is from a card-body consisting of an image and paragraph text. The footer' +
                        'consists of tabs, icons aligned left, within the card-footer.',
                        photos: ['img/upload/cat.jpg'],
                        likes: 5,
                        comments: 10
                    },
                    {
                        name: 'Jackey Li',
                        icon: 'img/avatar/avatar01.jpg',
                        insertDate: 'November 05, 1955',
                        content: 'This is a "Facebook" styled Card. The header is created from a Thumbnail List item,' +
                        'the content is from a card-body consisting of an image and paragraph text. The footer' +
                        'consists of tabs, icons aligned left, within the card-footer.',
                        photos: ['img/upload/cat.jpg'],
                        likes: 5,
                        comments: 10
                    }
                ];
                return list;
            };

            return service;
        }]);
})(angular);