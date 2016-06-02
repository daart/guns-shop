import {staffService} from 'shared/services/staff.service';

class profileController {
    constructor() {
        console.log('profile controlelr works fine');
    }
}

profileController.$inject = ['staffService'];

export {profileController};
