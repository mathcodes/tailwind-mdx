import React, { useState, useEffect } from 'react';


function MediumFeed() {

  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jcircle9')
      .then(resp => resp.json())
      .then(data => {
        setBlogs(data.items)
      })
  }, [])

  console.log(blogs)
  return (
    <div className="App">
      <h1>My Blogs</h1>
      {blogs.map(blog => {
        return <div>
          <h1>{blog.title}</h1>
          <img src={blog.thumbnail} alt={blog.title} /><br />
          <a href={blog.link} target="_blank" rel="noopener noreferrer">View Blog Post</a>
        </div>
      })}
    </div>
  );
}

export default MediumFeed;