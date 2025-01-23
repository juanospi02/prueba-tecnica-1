import mongoose from 'mongoose';
// modelo user
const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true,
    },
    email: {
        type: String, required: true,
    },
    password: {
        type: String,required: true,
    },
}, ); 

const User = mongoose.model('User', userSchema);

export default User;
