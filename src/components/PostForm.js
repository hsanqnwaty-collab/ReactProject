import "./PostForm.css";

import PostList from "./PostList";
import { useState } from "react";

function PostForm() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (!content) return;

    const newPost = {
      id: Date.now(),
      content,
      image: image ? URL.createObjectURL(image) : null,
      author: "You",
      likes: 0,
      liked: false,
    };

    setPosts([newPost, ...posts]);
    setContent("");
    setImage(null);
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked,
            }
          : post
      )
    );
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="feed-page">

      {/* Create Post */}
      <div className="post-form">
        <h3>Create Post</h3>

        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button onClick={handlePost}>Post</button>
      </div>

      {/* Feed */}
      <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
    </div>
  );
}

export default PostForm;