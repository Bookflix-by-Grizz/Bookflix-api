import {Schema, model} from 'mongoose';


const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    }
);

export default model ('Book', bookSchema);
