import { useState } from "react";

import ContentView from "./components/ContentView";
import Header from "./components/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import PreviewToggle from "./components/PreviewToggle";
import Menu from "./components/Menu";

import useStoredState from "./hooks/useStoredState";

import defaultData from "./data.json";

function App() {
  const [currentFileIndex, setCurrentFileIndex] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullWidthPreview, setFullWidthPreview] = useState(false);
  const [markdown, setMarkdown] = useStoredState("markdownDb", defaultData);
  const currentMarkdown = markdown[currentFileIndex];

  const editorClassName = fullWidthPreview
    ? "hidden"
    : "col-start-1 col-end-[-1] lg:col-end-3";
  const previewClassName = fullWidthPreview
    ? "col-start-1 col-end-[-1]"
    : "hidden lg:grid lg:col-start-3 lg:col-end-[-1]";

  return (
    <div className="grid min-h-screen grid-cols-[auto_1fr] grid-rows-[4rem] overflow-x-hidden">
      <Header
        setMenuOpen={setMenuOpen}
        setMarkdown={setMarkdown}
        setCurrentFileIndex={setCurrentFileIndex}
        currentFileName={currentMarkdown.name}
        currentFileIndex={currentFileIndex}
        menuOpen={menuOpen}
        markdown={markdown}
      />

      <Menu
        visible={menuOpen}
        markdown={markdown}
        setCurrentFileIndex={setCurrentFileIndex}
        setMarkdown={setMarkdown}
      />

      <main className="grid w-full grid-cols-[1fr_2rem_1fr_2rem]">
        <PreviewToggle
          fullWidthPreview={fullWidthPreview}
          setPreviewVisible={setFullWidthPreview}
          className="col-start-4"
        />

        <ContentView
          heading="Markdown"
          content={currentMarkdown.content}
          className={editorClassName}
        >
          <MarkdownEditor
            setMarkdown={setMarkdown}
            currentFileIndex={currentFileIndex}
          />
        </ContentView>

        <ContentView
          heading="Preview"
          content={currentMarkdown.content}
          className={previewClassName}
        >
          <MarkdownPreview fullWidthPreview={fullWidthPreview} />
        </ContentView>
      </main>
    </div>
  );
}

export default App;
