import angular from 'angular';
import {staffDirective} from './members.directive';

const staff = angular.module('staff', [])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/staff', {
                    template: '<staff></staff>'
                });
        })
        .directive('staff', staffDirective);

export {staff};
