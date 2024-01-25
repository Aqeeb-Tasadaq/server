import BlogPost from "../modal/blog-post-modal.js";
export const CreateBlogPost= async (request, response)=>{
   try{
    const newBlog= new BlogPost(request.body)
    await newBlog.save()
    response.status(200).json({msg:'Blog Create Successfully'})
   }catch(error){
    response.status(500).json(error)
   } 
}
