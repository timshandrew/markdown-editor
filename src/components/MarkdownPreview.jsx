import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";

export default function MarkdownPreview() {
  const markdown = useContext(ContentContext);

  return (
    <>
      <p>{markdown}</p>
    </>
  );
}
