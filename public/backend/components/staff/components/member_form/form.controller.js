import {staffService} from 'shared/services/staff.service';

class memberFormController {
    constructor($route, staffService) {

        this.formData = {};
        this.isNewModel = $route.current.$$route.isNewModel;

        this.handleSubmit = () => {
            // console.log();

            if(memberForm.$valid) {
                console.log('Form is valid: ', this.formData);

                if(this.isNewModel) {
                    staffService.createStaffMember(_serializeForm());
                    this.formData = {};
                    this.memberForm.$setPrestine();

                } else {
                    staffService.editStaffMember();
                }
            }

        };

        let _serializeForm = () => {
            return {
                personal: {
                    firstName: this.formData.personal.firstName,
                    lastName: this.formData.personal.lastName,
                    birthDate: this.formData.personal.birthDate,
                    education: this.formData.personal.education
                },

                corporate: {
                    occupation: this.formData.corporate.occupation,
                    role: this.formData.corporate.role,

                    contacts: {
                        email: this.formData.corporate.contacts.email,
                        skype: this.formData.corporate.contacts.skype,
                        phone: this.formData.corporate.contacts.phone
                    }

                    // skillset: vm.formData.corporate.skisllset
                }

            };
        }
    }
}

memberFormController.$inject = ['$route', 'staffService'];

export {memberFormController};
