/**
 * Created by Jackey Li on 2015/8/19.
 */
(function (angular) {
    'use strict';

    angular.module('hiApp').config(function ($translateProvider) {

        //translate
        $translateProvider.translations('en', {
            common: {
                systemInfo: 'system info'
            },
            login: {
                userName: 'UserName',
                password: 'Password',
                language: 'Language',
                login: 'Login',
                error: ''
            },
            tweet: {
                tweetName: 'Tweet',
                like: 'Like',
                comments: 'Comments',
                comment: 'Comment',
                share: 'Share',
                addTweet: 'Add Tweet',
                somethingNew: 'What\'s new with you',
                tweetDetail: 'Tweet Detail',
                forward: 'Forward',
                addComment: 'Add Comment',
                noComment: 'No one comments',
                commentText: 'write a comment',
                reply: 'Reply',
                copy: 'Copy',
                cancel: 'Cancel'
            },
            contacts: {
                contactsName: 'Contacts',
                search: 'Search'
            },
            setting: {
                settingName: 'Setting',
                feekback: 'Feekback',
                update: 'Update',
                language: 'Language',
                about: 'About',
                logout: 'Log out'
            },
            language: {
                english: 'English',
                chinese: 'Chinese',
                title: 'Language',
                switchLanguage: 'switch Language'
            }
        });

        $translateProvider.translations('cn', {
            common: {
                systemInfo: '系统消息',
                about: 'Jackey Sparrow \n  Github:https://github.com/Jackey-Sparrow'
            },
            login: {
                userName: '用户名',
                password: '密码',
                language: '语言',
                login: '登录',
                error: ''
            },
            tweet: {
                tweetName: '推特',
                like: '赞',
                comments: '评论',
                comment: '评论',
                share: '分享',
                addTweet: '添加推特',
                somethingNew: '分享新鲜事',
                tweetDetail: '具体内容',
                forward: '转发',
                addComment: '添加评论',
                noComment: '暂无评论',
                commentText: '写一个评论',
                reply: '回复评论',
                copy: '复制',
                cancel: '取消'
            },
            contacts: {
                contactsName: '通讯录',
                search: '搜索'
            },
            setting: {
                settingName: '设置',
                feekback: '意见返馈',
                update: '检测更新',
                language: '切换语言',
                about: '关于我们',
                logout: '登出'
            },
            language: {
                english: '英文',
                chinese: '中文',
                title: '语言',
                switchLanguage: '转换语言'
            }
        });

        var key = 'en';

        var lastStoreUser = JSON.parse(localStorage.getItem('hiAppUserInfo')) || [];
        if (lastStoreUser && lastStoreUser.languageTranslate) {
            key = lastStoreUser.languageTranslate;
        }

        $translateProvider.preferredLanguage(key);
    });
})(angular);
