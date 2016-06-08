import {staffService} from 'shared/services/staff.service';

class memberFormController {
    constructor(staffService) {

        this.formData = {};

        this.addNewMember = () => {
            console.log(this.formData);
        };

        function _serializeForm() {
            return {

            }
        }
    }
}

memberFormController.$inject = ['staffService'];

export {memberFormController};
