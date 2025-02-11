import React from 'react';
import { GiParachute } from "react-icons/gi";
import { Link } from "react-router-dom";

function BlogPost({ post }) {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <GiParachute className="brand-icon" /> Parachute
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/#pricing" className="nav-link">
            Pricing
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/docs" className="nav-link">
            Docs
          </Link>
        </div>
      </nav>

      <div className="blog-post-container">
        <article className="blog-post">
          <header className="blog-post-header">
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">{post.date}</span>
              <span className="blog-post-author">By {post.author}</span>
              <span className="blog-post-readtime">{post.readTime}</span>
            </div>
          </header>

          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
}

export default BlogPost; 