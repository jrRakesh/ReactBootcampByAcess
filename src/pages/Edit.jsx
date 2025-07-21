import { useNavigate, useParams } from "react-router-dom"
import Navbar from "./components/NavBar"
import axios from "axios"
import { useState, useEffect } from "react"

function Edit(){
  const data = useParams()
  const navigate = useNavigate()

  const [title,setTitle] = useState("")
  const [subtitle,setSubtitle] = useState("")
  const [image,setImage] = useState("")
  const [description,setDescription] = useState("")
  
  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await axios.get("https://687af357abb83744b7ee4654.mockapi.io/blogs/" + data.id)
        const blog = res.data;
        setTitle(blog.title);
        setSubtitle(blog.subheadline);
        setImage(blog.image);
        setDescription(blog.description);
      } catch (err) {
        alert("Failed to fetch blog data.");
      }
    }
    fetchBlog();
  }, [data.id])
  
   async function sentDataToBackend(e){
      e.preventDefault()
      const response = await axios.put("https://687af357abb83744b7ee4654.mockapi.io/blogs/" + data.id,{
        // key(yo const ma vako variable) : value(yo chai api ma vako name)
        title : title,
        subheadline : subtitle,
        description : description,
        image : image
      })
      if(response.status == 200){
        navigate("/single/"+ data.id)
      } else {
        alert("Error Occured")
      }
      
    }
    
    return(
        <>
        <Navbar />
        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Edit Blog Post</title>
  <section className="flex-grow container mx-auto p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Blog Post</h1>
    <form onSubmit={sentDataToBackend} action="/addBlog" method="POST" className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" id="title" name="title" value={title}  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter blog title" />
      </div>
      {/* Subitle */}
      <div className="mb-4">
        <label  htmlFor="subtitle" className="block text-gray-700 font-semibold mb-2">Sub Title</label>
        <input onChange={(e)=>setSubtitle(e.target.value)} value={subtitle} type="text" id="subtitle" name="subtitle"   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter blog title" />
      </div>
      {/* Image */}
      <div className="mb-4">
        <label  htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image</label>
        <input onChange={(e)=>setImage(e.target.value)} value={image} type="text" id="image" name="image"   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Image URL" />
      </div>
      {/* description */}
      <div className="mb-4">
        <label  htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} id="description" name="description"   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your blog content here" />
      </div>
      {/* Submit Button */}
      <div className="text-center">
        <button type="submit" className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition">
          Update
        </button>
      </div>
    </form>
  </section>
</div>
</>
    )
}
export default Edit