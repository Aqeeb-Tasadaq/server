import BlogPost from "../modal/blog-post-modal.js";

export const CreateBlogPost = async (request, response) => {
    try {
        const newBlog = new BlogPost(
        {
            title: request.body.title,
            description: request.body.description,
            long_description: request.body.long_description,
            author_name: request.body.author_name,
            blogType: request.body.blogType,
            date: request.body.date,
            image: request.file.filename,
            selectedDate: request.body.selectedDate
            
        })
        await newBlog.save()
        response.status(200).json({ msg: 'Blog Create Successfully' })
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getBlogPosts = async (request, response) => {
    // let username = request.query.username;
    let posts;
    try {
        posts = await BlogPost.find({})
        response.status(200).json(posts)
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getBlogPost = async (request, response) => {
    try {
        const post = await BlogPost.findById(request.params.id)
        response.status(200).json(post)
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getBlogType = async (request, response) => {
    console.log(request.query)
    try {
        const post = await BlogPost.find({blogType:request.query.blogType})
        response.status(200).json(post)
    } catch (error) {
        response.status(500).json(error)
    }
}