import { useNavigate } from "react-router-dom";
import useBlogPost from "../hook/useBlogPost";

function HomePage() {
  const navigate = useNavigate();
  const { posts, isError, isLoading, goToPost } = useBlogPost(navigate);

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button>Create Post</button>
      </div>
      <div className="board">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => goToPost(post.id)}>
                  View post
                </button>
                <button className="edit-button">Edit post</button>
              </div>
              <button className="delete-button">x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
