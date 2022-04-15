import React, { useEffect, useState } from "react";
import axios from "axios";
export default function PageCommnet() {
  const [comments, setComments] = useState([]);
  const [comment, setCommnet] = useState({ text: "" });

  useEffect(() => {
    const fetchComment = async () => {
      const res = await fetch("/api/comments");
      const data = await res.json();

      console.log("check res", res);
      setComments(data);
    };
    fetchComment();
  }, []);

  return (
    <>
      <h1>Comment Page</h1>
      {comments.map((item: any) => {
        return (
          <div key={item.id}>
            {item.id} - {item.text}
          </div>
        );
      })}
    </>
  );
}
