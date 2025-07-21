import { useState } from "react"
import Navbar from "./components/NavBar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Create(){
  const [title,setTitle] = useState("")
  const [subtitle,setSubtitle] = useState("")
  const [image,setImage] = useState("")
  const [description,setDescription] = useState("")
  console.log(title)

  const navigate = useNavigate()

   async function sentDataToBackend(e){
      e.preventDefault()
      const response = await axios.post("https://687af357abb83744b7ee4654.mockapi.io/blogs",{
        // key(yo const ma vako variable) : value(yo chai api ma vako name)
        title : title,
        subheadline : subtitle,
        description : description,
        image : image
      })
      console.log(response)
      if(response.status == 201){
        alert("Post Created Successfully!")
        navigate("/")
      } else {
        alert("Error Aay0!!!")
      }
    }


    return(
        <>
        <Navbar />
        <section className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create a New Blog Post</h1>
        <form onSubmit={sentDataToBackend} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              onChange={(e)=>setTitle(e.target.value)}
              required
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter blog title"
            />
          </div>
          {/* Subtitle */}
          <div className="mb-4">
            <label htmlFor="subtitle" className="block text-gray-700 font-semibold mb-2">Sub Title</label>
            <input
              onChange={(e)=>setSubtitle(e.target.value)}
              required
              type="text"
              id="subtitle"
              name="subtitle"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter subtitle"
            />
          </div>
          {/* Image */}
          <div className="mb-4">
            <label htmlFor="imageurl" className="block text-gray-700 font-semibold mb-2">Image URL</label>
            <input
              onChange={(e)=>setImage(e.target.value)}
              required
              type="text"
              id="imageurl"
              name="imageurl"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter image URL"
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea 
              onChange={(e)=>setDescription(e.target.value)}
              required
              id="description" 
              name="description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 h-40"
              placeholder="Write your blog here..."
            />
          </div>
          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Publish
            </button>
          </div>
        </form>
      </section>
</>
    )
}
export default Create