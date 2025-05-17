import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";

export default function MarkdownEditor({ setMarkdown, currentFileIndex }) {
  const markdown = useContext(ContentContext);

  return (
    <div className="font-roboto-mono p-5">
      <textarea
        className="no-resize field-sizing-content w-full wrap-anywhere focus:outline-none"
        onChange={(e) =>
          setMarkdown((currentMd) => {
            let newMd = structuredClone(currentMd);
            newMd[currentFileIndex].content = e.target.value;
            return newMd;
          })
        }
        value={markdown}
      ></textarea>
    </div>
  );
}
