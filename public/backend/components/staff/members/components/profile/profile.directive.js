import template from './profile.template.html';

export const profileDirective = () => {
    return {
        template,
        replace: true,
        scope: {}
    };
};
