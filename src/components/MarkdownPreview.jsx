import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";
import "../styles/previewStyles.css";
import Markdown from "react-markdown";

export default function MarkdownPreview() {
  const markdown = useContext(ContentContext);

  return (
    <div className="markdown-preview p-5">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
