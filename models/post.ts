import { Schema, model, models } from 'mongoose'

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    body: {
        type: String,
        required: [true, 'Body is required.']
    }
})

const Post = models.Post || model('Post', PostSchema)

export default Post