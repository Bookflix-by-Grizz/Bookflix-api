import {Schema, model} from 'mongoose';


const messageSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        message: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        textChannelId: {
            type: Schema.Types.ObjectId,
            ref: 'TextChannel',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model ('Message', messageSchema);
