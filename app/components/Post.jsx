import React from "react";

export default function Post({ id, title, content, authorName }) {
  return (
    <div>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
