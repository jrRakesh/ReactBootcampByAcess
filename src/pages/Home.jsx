import Cards from "./components/Cards"
import Navbar from "./components/NavBar"
import axios from 'axios'

import { useEffect, useState } from 'react'


//The first character of this function name should be in capital -Pascal Case
function Home(){
    const [blogs,setBlogs] = useState([])

    async function fetchBlogs(){
      const response = await axios.get("https://687af357abb83744b7ee4654.mockapi.io/blogs")
      setBlogs(response.data)
      if(response.status == 200){
        setBlogs(response.data)
      } else {
        alert("Error Aay0!!!")
      }
    }

    //We can use useEffect(()=> {  },[]) too.
useEffect(function(){
        fetchBlogs()
    },[])

    console.log(blogs,"This is blogs")

    return(
        <>
        <Navbar />
            <div className="flex justify-between flex-wrap">
                {blogs.map(function(blog){
                 return (
                    <Cards key={blog.id} blog={blog} />
                )
                })}
               
                
            </div>
        </>

    )
}
export default Home