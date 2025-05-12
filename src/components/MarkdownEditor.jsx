import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";

export default function MarkdownEditor() {
  const markdown = useContext(ContentContext);

  return (
    <div className="font-roboto-mono">
      <textarea className="field-sizing-content w-full">{markdown}</textarea>
    </div>
  );
}
