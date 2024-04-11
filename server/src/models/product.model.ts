import { Schema } from 'mongoose';

const productModel = new Schema({
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
})