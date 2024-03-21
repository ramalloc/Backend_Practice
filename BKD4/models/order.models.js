import mongoose, {Schema} from "mongoose";

const orderItemSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderShema = new Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: {
        type: [orderItemSchema]
    }, 
    address: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, {timestamps: true});


export const Order = mongoose.model("Order", orderShema)