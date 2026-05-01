import "./Home.css";

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

      <div className="posts-section">
        <h2>Latest Posts</h2>

        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">

              {/* Header */}
              <div className="post-header">
                <div className="avatar">{post.author[0]}</div>
                <div>
                  <h4>{post.author}</h4>
                  <span>{post.time}</span>
                </div>
              </div>

              {/* Content */}
              <p className="post-content">{post.content}</p>

              {/* Actions */}
              <div className="post-actions">
                <button>👍 Like</button>
                <button>💬 Comment</button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;