const staffService = ($http) => {

    var service = {
        getAllStaffMembers
    };

    function getAllStaffMembers() {
        return $http.get('/api/staff');
    }

    console.log('service is working' );

    return service;
};

staffService.$inject = ['$http'];

export {staffService};
