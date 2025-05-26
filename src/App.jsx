import { useState } from "react";

import Header from "./components/Header";
import PreviewToggle from "./components/PreviewToggle";
import Menu from "./components/Menu";

import useStoredState from "./hooks/useStoredState";

import { useFileMetaData } from "./hooks/useFileMetaData";
import ContentViewGroup from "./components/ContentViewGroup";

function App() {
  const INITIALINDEX = 1;
  const [currentFileIndex, setCurrentFileIndex] = useState(INITIALINDEX);
  const [fileMetaData, setFileMetaData] = useFileMetaData();

  const [menuOpen, setMenuOpen] = useState(false);
  const [fullWidthPreview, setFullWidthPreview] = useState(false);

  const [theme, setTheme] = useStoredState("theme", "light");

  function switchTheme() {
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  }

  return (
    <div
      className={`${theme} grid min-h-screen grid-cols-[auto_1fr] grid-rows-[4rem] overflow-x-hidden`}
    >
      <Header
        setMenuOpen={setMenuOpen}
        setCurrentFileIndex={setCurrentFileIndex}
        currentFileIndex={currentFileIndex}
        menuOpen={menuOpen}
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

        <ContentViewGroup
          fullWidthPreview={fullWidthPreview}
          fileIndex={currentFileIndex}
        />
      </main>
    </div>
  );
}

export default App;
