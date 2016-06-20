import {staffService} from 'shared/services/staff.service';

class profileController {
    constructor( staffService ) {

        staffService.getStaffMember()
            .then((res) => {
                if(res.data.success) {
                    this.staffMember = res.data.profile;
                }
            });
    }
}

profileController.$inject = ['staffService'];

export {profileController};
