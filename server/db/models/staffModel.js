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
    personal: {
        firstName: {type: String, required: true},
        lastName: {type: String, require: true},
        birthDate: {type: Date, require: true, default: Date.now },
        education: {type: String, default: 'PhD'}
    },

    corporate: {
        occupation: {type: String},

        contacts: {
            email: {type: String, require: true, default: 'examplemail@gmail.com'},
            skype: {type: String, require: true },
            phone: {type: Number, require: true, default: +380505551855}
        },

        role: {
            type: String,
            enum: staff_roles,
            default: staff_roles[2],
            require:true
        },

        skillset: {
            type: Array,
            default: ['Web Development', 'English', 'XHR']
        }
    },

},{collection: 'staff_members'}
);

module.exports = mongoose.model('Staff', staffMemberSchema);
