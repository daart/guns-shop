class staffService {
    constructor($http){
        this.$http = $http;
    }

    getAllStaffMembers() {
        return this.$http.get('/api/staff');
    }

    getStaffMember(id) {
        return this.$http.get('/api/staff/profile/' + id);
    }

    deleteStaffMember(id) {
        return this.$http.delete('/api/staff/delete/' + id);
    }

    editStaffMember(id, formData) {
        return this.$http.put('/api/staff/edit/' + id, formData);
    }

    createStaffMember(formData) {
        return this.$http.post('/api/staff/addMember', formData);
    }

}

staffService.$inject = ['$http'];

export {staffService};
