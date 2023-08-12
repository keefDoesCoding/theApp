import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString(); // Get the current timestamp
    const newPost = { title, content, author, timestamp };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="blog-page"> {/* Add the 'blog-page' class */}
      <h1>Post Some Shit Dawg</h1>
      <form onSubmit={handleSubmit} className="blog-form"> {/* Add the 'blog-form' class */}
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Blog Posts</h2>
      <ul className="blog-posts"> {/* Add the 'blog-posts' class */}
        {posts.map((post, index) => (
          <li key={index} className="blog-post"> {/* Add the 'blog-post' class */}
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="author">Author: {post.author}</p> {/* Add the 'author' class */}
            <p className="timestamp">Timestamp: {post.timestamp}</p> {/* Add the 'timestamp' class */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;