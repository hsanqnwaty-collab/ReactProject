import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  const posts = [
    {
      id: 1,
      author: "Hassan",
      time: "2 hours ago",
      content: "Hello everyone 👋 this is my first post!",
    },
    {
      id: 2,
      author: "Ahmad",
      time: "1 day ago",
      content: "React is awesome 🚀",
    },
  ];

  return (
    <div className="home">
      <h1 className="welcome">Welcome to MyApp 🚀</h1>

      <Link to="/register">Register</Link>

      <div className="posts-section">
        <h2>Latest Posts</h2>

        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h4>{post.author}</h4>
              <span>{post.time}</span>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;