class headerController {

    constructor($location) {
        this.isActive = function (url) {
            return $location.path() === url;
        };
    }
}

headerController.$inject = ['$location'];

export {headerController};
