import FileListItem from "./FileListItem";
import logo from "../assets/logo.svg";
import ThemeSwitch from "./ui/ThemeSwitch";

import { getCurrentDate } from "@/lib/utils";
import { addFileToStorage } from "@/utils/localStorageUtils.js";

export default function Menu({
  visible,
  fileMetaData,
  setFileMetaData,
  theme,
  setCurrentFileIndex,
  switchTheme,
}) {
  const visibleClasses = visible ? "w-max p-6 " : "w-0 p-0";

  const fileListItems = fileMetaData.map((mdObj, index) => (
    <FileListItem
      key={mdObj.name}
      creationDate={mdObj.createdAt}
      fileName={mdObj.name}
      setCurrentFileIndex={() => setCurrentFileIndex(index)}
    />
  ));

  function addNewDocument() {
    let fileNum = 1;
    let fileName = "untitled-document.md";

    while (true) {
      let fileNameExists = fileMetaData.reduce(
        (accumulator, mdObj) => accumulator || mdObj.name == fileName,
        false,
      );

      if (fileNameExists) {
        fileName = `untitled-document${fileNum}.md`;
        fileNum++;
      } else {
        break;
      }
    }

    setFileMetaData(() => {
      const newMarkdown = structuredClone(fileMetaData);
      newMarkdown.push({
        createdAt: getCurrentDate(),
        name: fileName,
      });
      return newMarkdown;
    });

    addFileToStorage(fileName, getCurrentDate());
  }

  return (
    <nav
      className={`bg-900 text-100 row-span-2 row-start-1 flex flex-col items-start gap-6 overflow-hidden ${visibleClasses}`}
    >
      <img className="block lg:hidden" src={logo} alt="Company logo" />

      <h2 className="text-500 text-heading-s w-max uppercase">My Documents</h2>

      <button
        className="bg-orange hover:bg-orange-hover text-heading-m w-max cursor-pointer rounded-sm px-12 py-3"
        onClick={addNewDocument}
      >
        + New Document
      </button>

      <ul className="w-max">{fileListItems}</ul>

      <ThemeSwitch
        className="self-center"
        theme={theme}
        switchTheme={switchTheme}
      />
    </nav>
  );
}
