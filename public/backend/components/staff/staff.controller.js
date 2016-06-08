import {staffService} from 'shared/services/staff.service';

class staffController {

    constructor(staffService) {
        this.staff = [];

        staffService.getAllStaffMembers()
            .then((res) => {
                if(res.data.success) {
                    this.staff = res.data.staffData;
                }
        });

    }

}

staffController.$inject = ['staffService'];

export {staffController};
