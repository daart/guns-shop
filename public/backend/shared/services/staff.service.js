const staffService = ($http) => {

    function getAllStaffMembers() {
        return $http.get('/api/staff');
    }

    return {
        getAllStaffMembers
    };

};

staffService.$inject = ['$http'];

export {staffService};
