import angular from 'angular';
import {staffDirective} from './members.directive';
import {staffService} from 'shared/services/staff.service';

const staff = angular.module('staff', [])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/staff', {
                    template: '<staff></staff>'
                });
        })
        .directive('staff', staffDirective)
        .service('staffService', staffService);

export {staff};
