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

      {/* 👇 هذا المهم */}
      <Link to="/register">Register</Link>

      <div className="posts-section">
        ...
      </div>
    </div>
  );
}
export default Home;