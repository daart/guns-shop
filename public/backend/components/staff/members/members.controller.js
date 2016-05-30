import {staffService} from 'shared/services/staff.service';

class staffController {

    constructor(staffService) {
        this.v = 'ctrl works';
        this.staff = [];

        staffService.getAllStaffMembers()
            .then((res) => {
                var staff = [];
                if(res.data.status) {
                    staff = res.data.staffData;
                    this.staff = res.data.staffData;
                }

        });
    }

}

staffController.$inject = ['staffService'];

export {staffController};
