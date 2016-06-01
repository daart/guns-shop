var db = require('../db/config');

function getAllStaffMembers(req, res) {
    db.StaffModel.find({}, function (err, staffData) {

        if(err){
            res.json({
                success: false,
                error:err
            });
            return;
        }

        res.json({
            success: true,
            staffData: staffData,
            staffRole: db.StaffModel.schema.path('role').enumValues
        });
    });
}

function getStaffMember(req, res) {
    db.StaffModel.findById(req.params.id, function (err, profile) {
        if(err) {
            res.json({
                success:false,
                err:err
            });
            return;
        }

        res.json({
            success: true,
            profile: profile
        })
    });
}

module.exports = {
    getAllStaffMembers: getAllStaffMembers,
    getStaffMember: getStaffMember
};
