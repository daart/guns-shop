class memberFormController {

    constructor($route, staffService, $routeParams) {
        this.formData = {};
        this.isNewModel = $route.current.$$route.isNewModel;
        this.staffService = staffService;
        this.$routeParams = $routeParams;
        
        if(!this.isNewModel) {
            this.fetchProfileData(this.$routeParams.id);
        } 
    }

    fetchProfileData(id) {
        this.staffService.getStaffMember(id)
            .then( (res) => {
                this.formData = res.data.profile;
            })
    }

    handleSubmit () {

        if(this.memberForm.$valid) {

            if(this.isNewModel) {

                this.staffService.createStaffMember(this._serializeForm());
                this.formData = {};
                this.memberForm.$setPristine();

            } else {
                this.staffService.editStaffMember(this.$routeParams.id, this._serializeForm());
            }
        }

    }

    _serializeForm () {
        return {
            personal: {
                firstName: this.formData.personal.firstName,
                lastName: this.formData.personal.lastName,
                // birthDate: this.formData.personal.birthDate,
                education: this.formData.personal.education
            },

            corporate: {
                // occupation: this.formData.corporate.occupation,
                // role: this.formData.corporate.role,

                contacts: {
                    email: this.formData.corporate.contacts.email,
                    skype: this.formData.corporate.contacts.skype,
                    phone: this.formData.corporate.contacts.phone
                },

                skillset: this.formData.corporate.skisllset
            }
        };
    }
}

memberFormController.$inject = ['$route', 'staffService', '$routeParams'];

export {memberFormController};
