import { useState, useEffect } from "react";
import axios from "axios";

function useBlogPost() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts");
        setPosts(response.data.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const goToPost = (postId) => {
    console.log("goToPost", postId);
  };

  return { posts, isError, isLoading, goToPost };
}

export default useBlogPost;
