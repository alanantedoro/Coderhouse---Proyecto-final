import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'El mail es obligatorio'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    address: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
    },
    age: { type: Number, required: [true, 'La edad es obligatoria'] },
    phone: {
        type: Number,
        required: [true, 'El número de teléfono es obligatorio'],
    },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;