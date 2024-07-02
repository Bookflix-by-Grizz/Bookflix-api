import {Schema, model} from 'mongoose';


const commentSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'Author',
            required: true
        },
        bookId: {
            type: String,
            required: true,
            ref: 'Book'
        },
        comment: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

export default model ('Comment', commentSchema);
