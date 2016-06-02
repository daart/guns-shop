import angular from 'angular';
import {staffDirective} from './staff.directive';
import {staffService} from 'shared/services/staff.service';
import {profileDirective} from './components/profile/profile.directive'

const staff = angular.module('staff', [])
        .config(function ($routeProvider) {
            $routeProvider

                .when('/staff/addMember', {
                    template: '<div>add</div>'
                })
                .when('/staff/edit/:id', {
                    template: '<div>edit</div>'
                })
                .when('/staff/profile/:id', {
                    template: '<profile></profile>'
                })
                .when('/staff', {
                    template: '<staff></staff>'
                });
        })
        .directive('staff', staffDirective)
        .directive('profile', profileDirective)
        .service('staffService', staffService);

export {staff};
