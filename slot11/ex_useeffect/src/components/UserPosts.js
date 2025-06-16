import React, { useState, useEffect } from "react";

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        if (!response.ok) throw new Error("Fetch error");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h3>Bài viết người dùng {userId}</h3>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
};

export default UserPosts;