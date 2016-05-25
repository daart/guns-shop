var
        mongoose = require('mongoose'),
        Schema = mongoose.Schema;

var staff_roles = [
    "board member",
    "engineer",
    "blue-collar worker",
    "white-collar worker",
    "pink-collar worker"
];

var staffMemberSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, require: true},
    occupation: {type: String},
    role: {
        type: String,
        enum: staff_roles,
        default: staff_roles[2],
        require:true
    }
},{collection: 'staff_members'}
);

module.exports = mongoose.model('Staff', staffMemberSchema);
