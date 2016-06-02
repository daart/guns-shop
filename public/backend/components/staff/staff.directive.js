import template from './staff.template.html';
import {staffController as controller} from './staff.controller';

export const staffDirective = () => {
    return {
        template,
        controller,
        controllerAs: 'vm',
        restrict: 'EA',
        replace: true,
        scope: {}
    };
};
