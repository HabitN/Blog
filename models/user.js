import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        requeired: true,
    },
    email: {
        type: String,
        requeired: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: String,
},
{
    timestamps: true,
}
)

export default mongoose.model('User', UserSchema)