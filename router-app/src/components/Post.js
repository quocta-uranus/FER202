import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
