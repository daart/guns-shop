const
        dbCredentials = require('./dbCredentials'),
        StaffModel = require('./models/staffModel');

module.exports = {
    url : `mongodb://${dbCredentials.userName}:${dbCredentials.password}@ds011472.mlab.com:11472/guns_shop_db`,
    StaffModel: StaffModel
};
