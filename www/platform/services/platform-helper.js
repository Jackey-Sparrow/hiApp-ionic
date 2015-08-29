/**
 * Created by Jackey Li on 2015/8/29.
 */
(function (angular) {
    'use strict';

    /*
     * platform device helper
     */
    angular.module('ionic.extension').constant('platformDeviceHelper', {
        call: function (telephone) {
            window.location.href = 'tel:' + telephone;
        },
        email: function (email) {
            window.location.href = 'mailto:' + email;
        }
    });
})(angular);