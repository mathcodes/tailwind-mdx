import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '../components/icons/MagnifyingGlassIcon'

export const MagGlass = () => {
  return (
    <svg viewBox="0 0 20 20 h-3/4 w-3/4  " aria-hidden="true">
    <path strokeWidth="0" d="M2.5 8.5a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
    <path
      fill="white"
      fill-rule="oddeven"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m13 13 4.5 4.5m-9-3a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
    />
  </svg>
  )
}

export const BookIcon = (props) => {
  return (
    <svg viewBox="0 0 20 20 h-3/4 w-3/4  " aria-hidden="true" {...props}>
      <path
      fill="white"
      fill-rule="oddeven"
      stroke="currentColor"
      stroke-width="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10 5.5-7.5-3v12l7.5 3m0-12 7.5-3v12l-7.5 3m0-12v12"
      />
      <path
            fill="white"
            fill-rule="oddeven"
            stroke="currentColor"
            stroke-width="2.5"
      
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17.5 2.5-7.5 3v12l7.5-3v-12Z"
      />
    </svg>
  )
}


function MediumFeed() {

  const [blogs, setBlogs] = useState([])
  const [myBlogs, setMyBlogs] = useState([])


  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rgarza7')
      .then(resp => resp.json())
      .then(data => {
        setBlogs(data.items)
      })
  }, [])
  
  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jcircle9')
    .then(resp => resp.json())
    .then(data => {
      setMyBlogs(data.items)
    })
}, [])
      console.log(myBlogs)
  return (<>
    <ul className="text-2xl font-semibold text-gray-900 hover:text-pink-800 ">
      <ol className="hover:bg-gray-400">Table of Contents</ol>
      <ol>Jon's Articles</ol>
      <ol>Jon's Favorites</ol>
      <ol>Jon's DSA</ol>
    </ul>
   

    <div className= "App" >
      <h1>Jon's Articles</h1>
      {
    myBlogs.map(blog => {
      while (`${blog.title}`) {
        return <div>
          <a href={blog.link} target="_blank" rel="noopener noreferrer"className='flex justify-around my-32'>
            <h3>{blog.title}</h3>
          <img src={blog.thumbnail} alt={blog.title} className="w-1/3 h-1/3"/><br />
          <MagGlass />
          <BookIcon />
          </a>
        </div>
      }
    })
  }

      <h1>Jon's Favorites</h1>
      

  {
    blogs.map(blog => {
      while (`${blog.title}` === "Individual Learning Styles and Learning to Code") {
        return <div>
          <h3>{blog.title}</h3>
          <img src={blog.thumbnail} alt={blog.title} className="w-1/3 h-1/3"/><br />
          <a href={blog.link} target="_blank" rel="noopener noreferrer">View Blog Post</a>
        </div>
      }
    })
  }


    </div>
    </>
  );
}



export default MediumFeed;