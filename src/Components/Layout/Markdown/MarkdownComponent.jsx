import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import './index.scss'
export const MarkdownComponent = (props) => {
  const { markdownPath, markdownFileName } = props;
  const [post, setPost] = useState("");
  useEffect(() => {
    import(`${markdownPath}${markdownFileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) =>
        console.log(err),
      );
  });
  return (
      <div className={'markdown-styles'}>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {post}
      </Markdown>
      </div>
  );
};
