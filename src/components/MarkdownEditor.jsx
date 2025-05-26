import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";

export default function MarkdownEditor({ setMarkdown }) {
  const markdown = useContext(ContentContext);

  return (
    <div className="font-roboto-mono row-start-2 row-end-[-1] p-5">
      <textarea
        className="text-text-primary no-resize field-sizing-content h-full w-full wrap-anywhere focus:outline-none"
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      ></textarea>
    </div>
  );
}
