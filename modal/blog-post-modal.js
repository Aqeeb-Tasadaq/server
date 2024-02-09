import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        long_description:{
            type: String,
            required: true,
        },
        author_name:{
            type: String,
            required: true,
        },
         blogType:{
             type: String,
             required: true,
         },
        selectedDate:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: true,
        }
    }
)
const BlogPost = mongoose.model('blogs', blogSchema)
export default BlogPost;