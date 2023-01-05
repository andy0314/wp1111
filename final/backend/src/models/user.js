import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    name: { type: String, required: [true, 'Name field is required!'] },
    password: { type: String },
    courses: [{ type: mongoose.Types.ObjectId, ref: 'course' }],
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel