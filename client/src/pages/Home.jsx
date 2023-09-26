import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => setListOfPosts(res.data));
  }, []);

  return (
    <div className="container__posts">
      {listOfPosts.map((post) => (
        <Post p={post} key={post.id} />
      ))}

      <Link to="/createpost">Create a Post </Link>
    </div>
  );
}

function Post({ p }) {
  return (
    <div className="post">
      <h2>{p.username}</h2>
      <p>{p.text}</p>
      <p className="data">{p.createdAt.slice(0, 10)}</p>
    </div>
  );
}
