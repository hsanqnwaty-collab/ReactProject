import "./PostList.css";

function PostList({ posts, onLike, onDelete }) {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div className="post-card" key={post.id}>

          {/* Header */}
          <div className="post-header">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="avatar"
            />
            <span>{post.author}</span>
          </div>

          {/* Content */}
          <p>{post.content}</p>

          {post.image && <img src={post.image} alt="post" />}

          {/* Actions */}
          <div className="post-actions">
            <button onClick={() => onLike(post.id)}>
              ❤️ {post.likes}
            </button>

            <button onClick={() => onDelete(post.id)}>
              🗑️ Delete
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default PostList;