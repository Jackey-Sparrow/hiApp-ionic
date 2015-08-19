/**
 * Created by Jackey Li on 2015/8/19.
 */
(function (angular) {
    'use strict';

    /*
     * small item
     *
     * @example
     *
     * <ion-small-item data-icon-class='ion-lightbulb' data-icon-bgcolor='feekback' data-description='feekback' on-tap-event='feekback'></ion-small-item>
     *
     * @example
     *
     * data-icon-class : icon's class
     * data-icon-bgcolor : customize background-color, set the background-color in css file, and use the class name here
     * data-description : description
     * onTapEvent :on tap event
     */
    angular.module('ionic.extension', []).directive('ionSmallItem',
        [function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    onTapEvent: '='
                },
                templateUrl: 'js/platform/templates/ion-small-item.html',
                link: function (scope, element, attr) {
                    scope.iconClass = attr.iconClass;
                    scope.iconBackgroudColor = attr.iconBgcolor;
                    scope.description = attr.description;
                }
            };
        }]);
})(angular);