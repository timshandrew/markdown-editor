import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";
import "../styles/previewStyles.css";
import Markdown from "react-markdown";

export default function MarkdownPreview() {
  const markdown = useContext(ContentContext);

  return (
    <div className="markdown-preview mx-auto max-w-[80ch] p-5">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
