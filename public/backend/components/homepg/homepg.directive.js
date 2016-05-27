import homepgController from './homepg.controller';
import homepgTemplate from './homepg.template.html';

export const homepgDirective = () => {
    return {
        template: homepgTemplate,
        controller: homepgController,
        controllerAs: 'vm',
        replace: true,
        restrict: 'EA',
        scope: {

        }
    };
};
