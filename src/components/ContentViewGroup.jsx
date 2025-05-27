import ContentView from "./ContentView";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";

export default function ContentViewGroup({
  fullWidthPreview,
  markdown,
  setMarkdown,
}) {
  const editorClassName = fullWidthPreview
    ? "hidden"
    : "col-start-1 col-end-[-1] lg:col-end-3";
  const previewClassName = fullWidthPreview
    ? "col-start-1 col-end-[-1]"
    : "hidden lg:grid lg:col-start-3 lg:col-end-[-1]";

  return (
    <>
      <ContentView
        heading="Markdown"
        content={markdown}
        className={editorClassName}
      >
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      </ContentView>

      <ContentView
        heading="Preview"
        content={markdown}
        className={previewClassName}
      >
        <MarkdownPreview fullWidthPreview={fullWidthPreview} />
      </ContentView>
    </>
  );
}
