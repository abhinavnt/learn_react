import axios from "axios";
import React, { use, useEffect, useState } from "react";

const Maptest = () => {
  const [post, setPost] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    setPost(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {post.map((post, index) => (
        <div style={{border: "2px solid red", marginBottom: "10px", padding: "10px"}}>
          <p>{post.userId}</p>
          <p>{post.title}</p>
           <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Maptest;
