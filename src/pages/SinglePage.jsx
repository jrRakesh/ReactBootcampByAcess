import Navbar from "./components/NavBar"

function SinglePage(){
    return(
        <>
        <Navbar />
        
{/* Content Section Component */}
<section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
  {/* Content Container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Main Content */}
      <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-6 sm:mb-8 animate-fade-in">
            The Evolution of Modern Design
          </h2>
          <div className="space-y-4 sm:space-y-6 text-neutral-300 text-base sm:text-lg">
            <p className="animate-slide-up" style={{animationDelay: '0.1s'}}>
              Design is no longer just about aesthetics—it's about creating experiences that resonate with users on a deeper level. Through careful consideration of space, typography, and interaction, we craft interfaces that feel both familiar and innovative.
            </p>
            <p className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              The key lies in understanding the delicate balance between form and function. Each element serves a purpose, contributing to a cohesive whole that guides users naturally through their journey.
            </p>
            <div className="relative my-8 sm:my-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/50 to-transparent rounded-lg sm:rounded-xl" />
              <blockquote className="relative border-l-2 border-neutral-700 pl-4 sm:pl-6 py-3 sm:py-4">
                <p className="text-lg sm:text-xl text-white italic font-light">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <cite className="block mt-3 sm:mt-4 text-sm text-neutral-400">— Steve Jobs</cite>
              </blockquote>
            </div>
            <p className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              As we move forward, the focus shifts towards creating sustainable, accessible, and inclusive designs that stand the test of time while pushing the boundaries of innovation.
            </p>
          </div>
        </article>
      </div>
      {/* Sidebar Content */}
      <aside className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2 space-y-6 sm:space-y-8">
        {/* Key Points */}
        <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg sm:rounded-xl p-4 sm:p-6 animate-slide-left" style={{animationDelay: '0.5s'}}>
          <h3 className="text-base sm:text-lg font-light text-white mb-3 sm:mb-4">Key Principles</h3>
          <ul className="space-y-2 sm:space-y-3 text-neutral-400 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <div className="w-1 h-1 bg-neutral-700 rounded-full" />
              <span>Minimalist Approach</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1 h-1 bg-neutral-700 rounded-full" />
              <span>Functional Aesthetics</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1 h-1 bg-neutral-700 rounded-full" />
              <span>User-Centric Focus</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1 h-1 bg-neutral-700 rounded-full" />
              <span>Responsive Elements</span>
            </li>
          </ul>
        </div>
        {/* Related Topics */}
        <div className="space-y-3 sm:space-y-4 animate-slide-left" style={{animationDelay: '0.6s'}}>
          <h3 className="text-base sm:text-lg font-light text-white">Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 sm:px-3 py-1 bg-neutral-900/50 border border-neutral-800 rounded-full text-xs sm:text-sm text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors duration-300">Typography</span>
            <span className="px-2 sm:px-3 py-1 bg-neutral-900/50 border border-neutral-800 rounded-full text-xs sm:text-sm text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors duration-300">Layout</span>
            <span className="px-2 sm:px-3 py-1 bg-neutral-900/50 border border-neutral-800 rounded-full text-xs sm:text-sm text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors duration-300">Color Theory</span>
            <span className="px-2 sm:px-3 py-1 bg-neutral-900/50 border border-neutral-800 rounded-full text-xs sm:text-sm text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors duration-300">Interaction</span>
            <span className="px-2 sm:px-3 py-1 bg-neutral-900/50 border border-neutral-800 rounded-full text-xs sm:text-sm text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors duration-300">Accessibility</span>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>


        </>
    )
}
export default SinglePage