import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";

export default function MarkdownEditor() {
  const markdown = useContext(ContentContext);

  return <p className="font-roboto-mono">{markdown}</p>;
}
