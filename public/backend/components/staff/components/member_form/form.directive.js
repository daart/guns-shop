import {memberFormController as controller} from './form.controller';
import template from './form.template.html';

export const memberFormDirective = () => {
    return {
        controller,
        controllerAs: 'vm',
        template,
        replace: true,
        scope: {}
    };
};
