import { useState } from "react";
import ContentView from "./components/ContentView";
import Header from "./components/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import PreviewToggle from "./components/PreviewToggle";

import markdownData from "./data.json";
import Menu from "./components/Menu";

function App() {
  const [markdown, setMarkdown] = useState(markdownData[1].content);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullWidthPreview, setFullWidthPreview] = useState(false);

  const editorClassName = fullWidthPreview
    ? "hidden"
    : "col-start-1 col-end-[-1] lg:col-end-3";
  const previewClassName = fullWidthPreview
    ? "col-start-1 col-end-[-1]"
    : "hidden lg:grid lg:col-start-3 lg:col-end-[-1]";

  return (
    <div className="grid grid-cols-[auto_auto] overflow-hidden">
      <Header setMenuOpen={setMenuOpen} />

      <Menu visible={menuOpen} />

      <main className="grid grid-cols-[1fr_2rem_1fr_2rem]">
        <PreviewToggle
          fullWidthPreview={fullWidthPreview}
          setPreviewVisible={setFullWidthPreview}
          className="col-start-4"
        />

        <ContentView
          heading="Markdown"
          content={markdown}
          className={editorClassName}
        >
          <MarkdownEditor setMarkdown={setMarkdown} />
        </ContentView>

        <ContentView
          heading="Preview"
          content={markdown}
          className={previewClassName}
        >
          <MarkdownPreview />
        </ContentView>
      </main>
    </div>
  );
}

export default App;
