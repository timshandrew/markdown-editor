import { useEffect, useState } from "react";

import Header from "./components/Header";
import PreviewToggle from "./components/PreviewToggle";
import Menu from "./components/Menu";

import useStoredState from "./hooks/useStoredState";

import ContentViewGroup from "./components/ContentViewGroup";
import { getMarkdownFile } from "./utils/localStorageUtils";
import { Toaster } from "./components/ui/sonner";

function App() {
  const INITIALINDEX = 1;
  const [currentFileIndex, setCurrentFileIndex] = useState(INITIALINDEX);
  const [markdown, setMarkdown] = useState(
    getMarkdownFile(currentFileIndex).content,
  );

  useEffect(() => {
    setMarkdown(getMarkdownFile(currentFileIndex).content);
  }, [currentFileIndex]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [fullWidthPreview, setFullWidthPreview] = useState(false);

  const [theme, setTheme] = useStoredState("theme", "light");

  function switchTheme() {
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  }

  return (
    <div
      className={`${theme} relative grid min-h-screen grid-cols-[auto_1fr] grid-rows-[4rem] overflow-x-hidden`}
    >
      <Header
        setMenuOpen={setMenuOpen}
        setCurrentFileIndex={setCurrentFileIndex}
        currentFileIndex={currentFileIndex}
        menuOpen={menuOpen}
        markdown={markdown}
      />

      <Menu
        visible={menuOpen}
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

        <ContentViewGroup
          key={currentFileIndex}
          fullWidthPreview={fullWidthPreview}
          fileIndex={currentFileIndex}
          markdown={markdown}
          setMarkdown={setMarkdown}
        />
      </main>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
