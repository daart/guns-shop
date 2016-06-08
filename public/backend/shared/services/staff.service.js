const staffService = ($http, $routeParams) => {

    function getAllStaffMembers() {
        return $http.get('/api/staff');
    }

    function getStaffMember() {
        return $http.get('/api/staff/profile/' + $routeParams.id);
    }

    function deleteStaffMember() {
        return $http.delete()
    }

    function editStaffMember() {

    }

    function createStaffMember() {
        return $http.post('/api/staff/addMember')
    }

    return {
        getAllStaffMembers,
        getStaffMember,
        deleteStaffMember,
        editStaffMember,
        createStaffMember
    };

};

staffService.$inject = ['$http', '$routeParams'];

export {staffService};
