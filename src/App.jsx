import { useEffect, useState } from "react";

import ContentView from "./components/ContentView";
import Header from "./components/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import PreviewToggle from "./components/PreviewToggle";
import Menu from "./components/Menu";

import useStoredState from "./hooks/useStoredState";

import useMarkdown from "./hooks/useMarkdown";
import { getMarkdownFile } from "./utils/localStorageUtils";
import { useFileMetaData } from "./hooks/useFileMetaData";

function App() {
  const INITIALINDEX = 1;
  const [currentFileIndex, setCurrentFileIndex] = useState(INITIALINDEX);
  const [workingMarkdown, setWorkingMarkdown] = useMarkdown(INITIALINDEX);
  const [fileMetaData, setFileMetaData] = useFileMetaData();

  useEffect(() => {
    setWorkingMarkdown(getMarkdownFile(currentFileIndex));
  }, [currentFileIndex, setWorkingMarkdown]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [fullWidthPreview, setFullWidthPreview] = useState(false);

  const [theme, setTheme] = useStoredState("theme", "light");

  function switchTheme() {
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  }

  const editorClassName = fullWidthPreview
    ? "hidden"
    : "col-start-1 col-end-[-1] lg:col-end-3";
  const previewClassName = fullWidthPreview
    ? "col-start-1 col-end-[-1]"
    : "hidden lg:grid lg:col-start-3 lg:col-end-[-1]";

  return (
    <div
      className={`${theme} grid min-h-screen grid-cols-[auto_1fr] grid-rows-[4rem] overflow-x-hidden`}
    >
      <Header
        setMenuOpen={setMenuOpen}
        setMarkdown={setWorkingMarkdown}
        setCurrentFileIndex={setCurrentFileIndex}
        currentFileIndex={currentFileIndex}
        menuOpen={menuOpen}
        markdown={workingMarkdown}
      />

      <Menu
        visible={menuOpen}
        fileMetaData={fileMetaData}
        setFileMetaData={setFileMetaData}
        theme={theme}
        setCurrentFileIndex={setCurrentFileIndex}
        switchTheme={switchTheme}
      />

      <main className="grid w-full grid-cols-[1fr_2rem_1fr_2rem]">
        <PreviewToggle
          fullWidthPreview={fullWidthPreview}
          setPreviewVisible={setFullWidthPreview}
          className="col-start-4"
        />

        <ContentView
          heading="Markdown"
          content={workingMarkdown.content}
          className={editorClassName}
        >
          <MarkdownEditor
            setMarkdown={setWorkingMarkdown}
            currentFileIndex={currentFileIndex}
          />
        </ContentView>

        <ContentView
          heading="Preview"
          content={workingMarkdown.content}
          className={previewClassName}
        >
          <MarkdownPreview fullWidthPreview={fullWidthPreview} />
        </ContentView>
      </main>
    </div>
  );
}

export default App;
