import mongoose, {Schema} from "mongoose";


const subTodoSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
}, {timestamps: true});


export const SubTodo = mongoose.model("SubTodo", subTodoSchema)