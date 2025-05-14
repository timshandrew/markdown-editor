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

  return (
    <div className="grid grid-cols-[auto_auto]">
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
          className="col-start-1"
        >
          <MarkdownEditor setMarkdown={setMarkdown} />
        </ContentView>

        <ContentView
          heading="Preview"
          content={markdown}
          className="col-start-3"
        >
          <MarkdownPreview />
        </ContentView>
      </main>
    </div>
  );
}

export default App;
