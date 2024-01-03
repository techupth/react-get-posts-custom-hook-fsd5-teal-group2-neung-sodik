import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreatePostForm() {
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleCreateButtonClick = () => {
    navigate("/post/create");
  };

  return (
    <form className="post-form">
      <h1>Create Post Form</h1>
      <div className="input-container">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title here"
            value={post.title}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Content
          <textarea
            id="content"
            name="content"
            type="text"
            placeholder="Enter content here"
            value={post.content}
            onChange={handleInputChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="button" onClick={handleCreateButtonClick}>
          Create
        </button>
      </div>
    </form>
  );
}

export default CreatePostForm;
