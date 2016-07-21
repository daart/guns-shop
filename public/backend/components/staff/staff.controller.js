import {staffService} from 'shared/services/staff.service';

class staffController {

    constructor(staffService) {
        this.staff = [];
        this.staffService = staffService;

        this.staffService.getAllStaffMembers()
            .then((res) => {
                if(res.data.success) {
                    this.staff = res.data.staffData;
                    this.staffRole = res.data.staffRole;
                }
            });
    }

    _deleteStaffMember(id) {
        this.staffService.deleteStaffMember(id)
            .then((res) => {
                if(res.data.success) {
                    this.staff = this.staff.filter(function (index) {
                        return index._id !== id;
                    });
                }
            });
    }

}

staffController.$inject = ['staffService'];

export {staffController};
