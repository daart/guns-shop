const staffService = ($http) => {

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

    }

    return {
        getAllStaffMembers,
        getStaffMember,
        deleteStaffMember,
        editStaffMember,
        createStaffMember
    };

};

staffService.$inject = ['$http'];

export {staffService};
