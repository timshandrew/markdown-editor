import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";

export default function MarkdownEditor({ setMarkdown }) {
  const markdown = useContext(ContentContext);

  return (
    <div className="font-roboto-mono p-5">
      <textarea
        className="no-resize field-sizing-content w-full wrap-anywhere focus:outline-none"
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      ></textarea>
    </div>
  );
}
