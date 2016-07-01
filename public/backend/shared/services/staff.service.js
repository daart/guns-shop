class staffService {
    constructor($http, $routeParams){
        this.$http = $http;
        this.$routeParams = $routeParams;
    }

    getAllStaffMembers() {
        return this.$http.get('/api/staff');
    }

    getStaffMember() {
        return this.$http.get('/api/staff/profile/' + this.$routeParams.id);
    }

    deleteStaffMember(id) {
        return this.$http.delete('/api/staff/delete/' + id);
    }

    editStaffMember() {

    }

    createStaffMember(formData) {
        return this.$http.post('/api/staff/addMember', formData);
    }
}

staffService.$inject = ['$http', '$routeParams'];

export {staffService};
