import template from './components/app_container/container.template.html';
import {containerController as controller } from './app.controller';

export const appDirective = () => {
    return {
        template,
        controller,
        controllerAs: 'vm',
        scope: {},
        replace: true,
        restrict: 'E'
    };

};
