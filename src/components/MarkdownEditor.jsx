import { useContext } from "react";
import { ChangeTrackerContext } from "@/contexts/ChangeTrackerContext";

export default function MarkdownEditor({ setMarkdown, markdown }) {
  const [_, setHasChanges] = useContext(ChangeTrackerContext);

  function handleChange(e) {
    setMarkdown(e.target.value);
    setHasChanges(true);
  }

  return (
    <div className="font-roboto-mono row-start-2 row-end-[-1] p-5">
      <textarea
        className="text-text-primary no-resize field-sizing-content h-full w-full wrap-anywhere focus:outline-none"
        onChange={handleChange}
        value={markdown}
      ></textarea>
    </div>
  );
}
