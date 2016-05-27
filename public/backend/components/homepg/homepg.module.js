import angular from 'angular';
import {homepgDirective} from './homepg.directive';

const homepg = angular.module('homepg', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: '<homepg></homepg>'
            });
    })
    .directive('homepg', homepgDirective);

export {homepg};
