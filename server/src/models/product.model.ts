import mongoose from 'mongoose';

const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    miniDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

export default mongoose.model('Product', productModel)