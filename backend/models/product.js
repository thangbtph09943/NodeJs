import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        strim: true,
        maxLength: 32,
        required: true
    },
    description: {                  
        type: String,
        required: true,
        maxLength: 2000
    },
    price: {
        required: true,
        type: Number
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    shipping: {
        required: false,
        type: Boolean
    }
  

}, {timestamps: true});


module.exports = mongoose.model("Product", productSchema)