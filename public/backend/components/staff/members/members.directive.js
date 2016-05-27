import template from './members.template.html';
import {staffController as controller} from './members.controller';

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
