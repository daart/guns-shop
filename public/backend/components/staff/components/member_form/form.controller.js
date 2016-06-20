import {staffService} from 'shared/services/staff.service';

class memberFormController {
    constructor(staffService) {

        this.formData = {};

        this.handleSubmit = () => {
            console.log(this.formData, this.formData.corporate.skillset);
        };

        function _serializeForm() {
            return {
                personal: {
                    firstName: vm.formData.personal.firstName,
                    lastName: vm.formData.personal.lastName,
                    birthDate: vm.formData.personal.birthDate,
                    education: vm.formData.personal.education
                },

                corporate: {
                    occupation: vm.formData.corporate.occupation,
                    role: vm.formData.corporate.role,

                    contacts: {
                        email: vm.formData.corporate.contacts.email,
                        skype: vm.formData.corporate.contacts.skype,
                        phone: vm.formData.corporate.contacts.phone
                    },


                    skillset: vm.formData.corporate.skisllset.split(',')
                }

            }
        }
    }
}

memberFormController.$inject = ['staffService'];

export {memberFormController};
