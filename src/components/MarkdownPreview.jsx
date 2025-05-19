import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";
import "../styles/previewStyles.css";
import Markdown from "react-markdown";

export default function MarkdownPreview({ fullWidthPreview }) {
  const markdown = useContext(ContentContext);

  return (
    <div
      className={`${fullWidthPreview && "mx-auto max-w-[50rem]"} markdown-preview p-5`}
    >
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
