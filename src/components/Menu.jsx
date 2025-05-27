import FileListItem from "./FileListItem";
import logo from "../assets/logo.svg";
import ThemeSwitch from "./ui/ThemeSwitch";

import { addFileToStorage } from "@/utils/localStorageUtils.js";
import useFileItems from "@/hooks/useFileItems";

export default function Menu({
  visible,
  theme,
  setCurrentFileIndex,
  switchTheme,
}) {
  const [fileItems, _] = useFileItems();

  const visibleClasses = visible ? "w-max p-6 " : "w-0 p-0";

  const fileListItems = fileItems.map((mdObj, index) => (
    <FileListItem
      key={mdObj.name}
      creationDate={mdObj.createdAt}
      fileName={mdObj.name}
      setCurrentFileIndex={() => setCurrentFileIndex(index)}
    />
  ));

  function addNewDocument() {
    let newFileNum = 1;
    let newFileName = "untitled-document.md";

    while (true) {
      let fileAlreadyExists = fileItems.reduce(
        (accumulator, file) => accumulator || file.name == newFileName,
        false,
      );

      if (fileAlreadyExists) {
        newFileName = `untitled-document${newFileNum}.md`;
        newFileNum++;
      } else {
        break;
      }
    }

    addFileToStorage(newFileName);
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
