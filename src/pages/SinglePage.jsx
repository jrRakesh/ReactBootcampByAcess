import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./components/NavBar"
import { useNavigate, useParams } from "react-router-dom"

function SinglePage(){
  const data = useParams()
  const navigate = useNavigate()
  const [blog,setBlogs] = useState({})

  async function  getSingle() {
      const response = await axios.get("https://687af357abb83744b7ee4654.mockapi.io/blogs/" +data.id)
      
      if(response.status == 200){
        setBlogs(response.data)
      } else {
        alert("Error Aay0!!!")
      }
    }
    
    async function deleteBlog() {
      const response = await axios.delete("https://687af357abb83744b7ee4654.mockapi.io/blogs/" +data.id)
      
      if(response.status == 200){
        alert("Blog Deleted Successfully!")
        navigate("/")
      } else {
        alert("Error Aay0!!!")
      }
}

    useEffect(()=>{
        getSingle()
    },[])



    return(
        <>
        <Navbar />
       {/* Blog post with featured image */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
  <div className="max-w-3xl mx-auto">
    {/* Blog post header */}
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm">Published on <time dateTime="2022-04-05">{blog.date} - {blog.createdAt}</time></p>
    </div>
    {/* Featured image */}
    <img src={blog.image} alt="Featured image" className="w-full h-auto mb-8" />
    {/* Blog post content */}
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
      <p>{blog.description}</p>
      <p>{blog.description}</p>
      <p>{blog.description}</p>
      <p>{blog.description}</p>
    </div>
      <div className="flex justify-center space-x-4 mt-8">
        <button onClick={deleteBlog} className="bg-green-800 text-white py-2 px-5 rounded-full text-sm font-medium shadow-md hover:bg-green-900 hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5">Delete Post</button>
        <button  className="bg-green-800 text-white py-2 px-5 rounded-full text-sm font-medium shadow-md hover:bg-green-900 hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5">Edit Post</button>
      </div>
  </div>
</div>


        </>
    )
}
export default SinglePage