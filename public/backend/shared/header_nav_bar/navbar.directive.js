import template from './navbar.template.html';
import {headerController as controller} from './navbar.controller';

export const headerNav = () => {
    return {
        template,
        controller,
        controllerAs: 'vm',
        scope: {},
        restrict: 'EA',
        replace: true
    };
};
