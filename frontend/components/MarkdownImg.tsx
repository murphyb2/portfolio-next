import React from "react";

const MarkdownImg = ({ node: { url } }) => {
  console.log(url);
  return <>{url}</>;
};

export default MarkdownImg;
