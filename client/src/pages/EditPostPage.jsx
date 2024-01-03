import { useNavigate } from "react-router-dom";
import CreatePostForm from "../components/CreatePostForm";
import axios from "axios";

function CreatePostPage() {
  const navigate = useNavigate();

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/posts",
        formData
      );
      console.log("Post created:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h1>Create Post Page</h1>
      <CreatePostForm handleSubmit={handleSubmit} />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default CreatePostPage;
