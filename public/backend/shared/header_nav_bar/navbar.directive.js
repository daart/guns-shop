import template from './navbar.template.html';
import {navbarController as controller} from './navbar.controller';

export const navBar = () => {
    return {
        template,
        controller,
        controllerAs: 'vm',
        scope: {},
        restrict: 'EA',
        replace: true
    };
};
