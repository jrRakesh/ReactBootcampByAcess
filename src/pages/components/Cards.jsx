 import { Link, useNavigate } from "react-router-dom"
 
 function Cards({blog}){
    console.log(blog)
  const navigate = useNavigate()
    return(

<>
{/* Card */}
<div className="max-w-sm mx-auto mt-8 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl duration-300">
  {/* Card Image Section */}
  <div className="relative rounded-t-2xl overflow-hidden">
    {/* Image with Gradient & Blur Overlay */}
    <div className="card-image h-72 bg-cover bg-center rounded-t-2xl" style={{backgroundImage: `url(${blog.image})`}}>
      {/* Gradient Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm rounded-t-2xl" />
      {/* Text Content on Image */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <h2 className="text-3xl font-bold text-white leading-tight font-serif">{blog.headline}</h2>
        <p className="text-lg text-white opacity-80">{blog.subheadline}</p>
      </div>
    </div>
  </div>
  {/* Card Body Section */}
  <div className="p-6 bg-white space-y-4">
    <h3 className="text-2xl font-semibold text-gray-800 font-serif">{blog.title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      {blog.description}
    </p>
    {/* CTA Button & Timestamp */}
    <div className="flex justify-between items-center">
      <button onClick={() => navigate("/single/" + blog.id)} className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 hover:shadow-xl transition duration-300 transform flex items-center gap-2
">
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
      <span className="text-sm text-gray-500">Last updated: {blog.createdAt}</span>
    </div>
  </div>
</div>


</>
    )
}

export default Cards