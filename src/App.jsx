import { useState } from "react";
import ContentView from "./components/ContentView";
import Header from "./components/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import PreviewToggle from "./components/PreviewToggle";

import markdownData from "./data.json";

function App() {
  const [markdown, setMarkdown] = useState(markdownData[1].content);

  return (
    <div>
      <Header />

      <main className="grid grid-cols-[1fr_1fr_auto]">
        <PreviewToggle />

        <ContentView heading="Markdown" content={markdown}>
          <MarkdownEditor setMarkdown={setMarkdown} />
        </ContentView>

        <ContentView heading="Preview" content={markdown}>
          <MarkdownPreview />
        </ContentView>
      </main>
    </div>
  );
}

export default App;
