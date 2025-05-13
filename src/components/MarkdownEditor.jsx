import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";

export default function MarkdownEditor({ setMarkdown }) {
  const markdown = useContext(ContentContext);

  return (
    <div className="font-roboto-mono">
      <textarea
        className="field-sizing-content w-full"
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      ></textarea>
    </div>
  );
}
