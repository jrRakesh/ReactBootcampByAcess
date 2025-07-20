import Navbar from "./components/NavBar"

function Create(){
    return(
        <>
        <Navbar />
        <section className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Blog Post</h1>
        <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
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