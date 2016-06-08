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
            staffRole: db.StaffModel.schema.path('corporate.role').enumValues
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
            profile: profile,
            staffRole: db.StaffModel.schema.path('corporate.role').enumValues

        });
    });
}

function addNewStaffMember(req, res) {
    db.StaffModel.create(req.body, function(err, profile){
        if(err) {
            res.json({
                success: false,
                err: err
            });
            return;
        }

        res.json({
            success: true,
            profile: profile
        });
    });
}

function deleteStaffMember(req, res) {
    db.StaffModel.findByIdAndRemove(req.params.id, function (err, profile) {
        if(err) {
            res.json({
                success: false,
                err: err
            });
            return;
        }

        res.json({
            success: true,
            profile: profile
        });
    });
}

function updateStaffMemberProfile() {
    db.StaffModel.findByIdAndUpdate(id, {new: true}, function (err, updatedProfile) {
        if(err) {
            res.json({
                success: false,
                err: err
            });
            return;
        }

        res.json({
            success: true,
            profile: updatedProfile
        });
    });
}

module.exports = {
    getAllStaffMembers: getAllStaffMembers,
    addNewStaffMember: addNewStaffMember,
    getStaffMember: getStaffMember,
    deleteStaffMember: deleteStaffMember,
    updateStaffMemberProfile: updateStaffMemberProfile
};
