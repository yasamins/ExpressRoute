const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
        type: String,
        required: [true, 'Id field is required']
    },
    name: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});
// it gonna create a collection in db called ninja
const User = mongoose.model('scheme', UserSchema);
// export this module so we can use it in other files
module.exports = User;
