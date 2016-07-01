class memberFormController {

    constructor($route, staffService) {
        this.formData = {};
        this.isNewModel = $route.current.$$route.isNewModel;
        this.staffService = staffService;
    }

    handleSubmit () {

        if(this.memberForm.$valid) {

            if(this.isNewModel) {
                console.log(this.staffService);

                this.staffService.createStaffMember(this._serializeForm());
                this.formData = {};
                this.memberForm.$setPristine();

            } else {
                staffService.editStaffMember();
            }
        }

    }

    _serializeForm () {
        return {
            personal: {
                firstName: this.formData.personal.firstName,
                lastName: this.formData.personal.lastName,
                birthDate: this.formData.personal.birthDate,
                education: this.formData.personal.education
            },

            corporate: {
                // occupation: this.formData.corporate.occupation,
                // role: this.formData.corporate.role,

                contacts: {
                    email: this.formData.corporate.contacts.email,
                    skype: this.formData.corporate.contacts.skype,
                    phone: this.formData.corporate.contacts.phone
                }

                // skillset: this.formData.corporate.skisllset
            }
        };
    }
}

memberFormController.$inject = ['$route', 'staffService'];

export {memberFormController};
