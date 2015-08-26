/**
 * Created by Jackey Li on 15/8/25.
 */

(function (angular) {
    'use strict';

    angular.module('hiApp.tweet', []).config(function ($stateProvider) {
        $stateProvider.state('tab.tweet', {
            url: '/tweet',
            views: {
                'tab-tweet': {
                    templateUrl: 'tweet/templates/tweet.html',
                    controller: 'tweetController'
                }
            }
        })

            .state('tab.tweet-detail', {
                url: '/tweet/:tweetId',
                views: {
                    'tab-tweet': {
                        templateUrl: 'tweet/templates/tweet-detail.html',
                        controller: 'tweetDetailController'
                    }
                }
            });
    });
})(angular);