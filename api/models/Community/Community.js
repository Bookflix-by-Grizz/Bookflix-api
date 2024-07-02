import {Schema, model} from 'mongoose';


const communitySchema = new Schema(
    {
        authorId: {
            type: Schema.Types.ObjectId,
            ref: 'Author',
            required: true
        },
        textChannels: [
            {
                type: Schema.Types.ObjectId,
                ref: 'TextChannel'
            }
        ],
    },
    {
        timestamps: true,
    }
);

export default model ('Community', communitySchema);
