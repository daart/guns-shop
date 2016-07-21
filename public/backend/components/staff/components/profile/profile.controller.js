import {staffService} from 'shared/services/staff.service';

class profileController {
    constructor( staffService, $routeParams ) {
    	this.$routeParams = $routeParams;
        staffService.getStaffMember(this.$routeParams.id)
            .then((res) => {
                if(res.data.success) {
                    this.staffMember = res.data.profile;
                    // this.staffRole = res.data.staffRole;
                }
            });
    }
}

profileController.$inject = ['staffService', '$routeParams'];

export {profileController};
