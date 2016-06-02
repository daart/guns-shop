import template from './profile.template.html';
import {profileController as controller} from './profile.controller';

export const profileDirective = () => {
    return {
        template,
        controller,
        controllerAs: 'vm',
        replace: true,
        scope: {}
    };
};
