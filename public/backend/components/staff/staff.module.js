import angular from 'angular';
import {staffDirective} from './staff.directive';
import {staffService} from 'shared/services/staff.service';
import {profileDirective} from './components/profile/profile.directive';
import {memberFormDirective} from './components/member_form/form.directive';

const staff = angular.module('staff', [])
        .config(function ($routeProvider) {
            $routeProvider

                .when('/staff/addMember', {
                    template: '<add-member></add-member>'
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
        .directive('addMember', memberFormDirective)
        .service('staffService', staffService);

export {staff};
