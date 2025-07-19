  function Cards({blog}){
    console.log(blog)
    return(
      <>
 <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profile Card</title>
  <div className="max-w-md w-full bg-white rounded-xl  shadow-md overflow-hidden">
    {/* Header with background */}
    <div className="h-24 bg-gradient-to-r from-purple-500 to-pink-500" />
    {/* Profile content */}
    <div className="px-6 py-4">
      {/* Profile image centered between header and content */}
      <div className="flex justify-center -mt-16 mb-4">
        <img className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg" src={blog.image} alt="Profile image" />
      </div>
      {/* Name and title */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
        <p className="text-sm text-gray-600">{blog.subtitle}</p>
      </div>
      {/* Bio section */}
      <div className="mb-6">
        <p className="text-gray-700 text-center">
         {blog.createdAt}
        </p>
      </div>
      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
          Contact Me
        </button>
      </div>
      {/* Stats (optional) */}
      <div className="flex justify-between mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <span className="block font-bold text-gray-800">124</span>
          <span className="text-sm text-gray-600">Projects</span>
        </div>
        <div className="text-center">
          <span className="block font-bold text-gray-800">5.2k</span>
          <span className="text-sm text-gray-600">Followers</span>
        </div>
        <div className="text-center">
          <span className="block font-bold text-gray-800">86</span>
          <span className="text-sm text-gray-600">Following</span>
        </div>
      </div>
    </div>
  </div>
</div>

</>
    )
}

export default Cards