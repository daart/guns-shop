import {staffService} from 'shared/services/staff.service';

class profileController {
    constructor( staffService ) {
        console.log('profile controlelr works fine');

        staffService.getStaffMember()
            .then((res) => {
                if(res.data.success) {

                    console.log(res.data.profile);
                    this.staffMember = res.data.profile;
                }
            });
    }
}

profileController.$inject = ['staffService'];

export {profileController};
