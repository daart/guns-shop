import angular from 'angular';
// import homepgTemplate from './homepg.template.html';
import {homepgDirective} from './homepg.directive';


const homepg = angular.module('homepg', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<homepg></homepg>'
            });
    })
    .directive('homepg', homepgDirective);

export {homepg};
