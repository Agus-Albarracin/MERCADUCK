import mongoose from 'mongoose';

const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    minDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

export default mongoose.model('Product', productModel)