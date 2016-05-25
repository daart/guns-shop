var db = require('../db/config');

function getAllStaffMembers(req, res) {
    db.StaffModel.find({}, function (err, staffData) {

        if(err){
            res.json({
                status: false,
                error:err
            });
            return;
        }

        res.json({
            status: true,
            staffData: staffData,
            staffRole: db.StaffModel.schema.path('role').enumValues
        });
    });
}

module.exports = {
    getAllStaffMembers: getAllStaffMembers
};
