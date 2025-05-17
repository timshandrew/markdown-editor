import FileListItem from "./FileListItem";
import logo from "../assets/logo.svg";

export default function Menu({
  visible,
  persistedMarkdown,
  setCurrentFileIndex,
  setPersistedMarkdown,
}) {
  const visibleClasses = visible ? "w-max p-6 " : "w-0 p-0";

  const fileListItems = persistedMarkdown.map((mdObj, index) => (
    <FileListItem
      creationDate={mdObj.createdAt}
      fileName={mdObj.name}
      setCurrentFileIndex={() => setCurrentFileIndex(index)}
    />
  ));

  function addNewDocument() {
    let fileNum = 1;
    let fileName = "untitled-document.md";

    while (true) {
      let fileNameExists = persistedMarkdown.reduce(
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

    setPersistedMarkdown(() => {
      const array = structuredClone(persistedMarkdown);
      array.push({
        createdAt: "test Time",
        name: fileName,
        content: "Some test content",
      });
      return array;
    });
  }

  return (
    <nav
      className={`bg-900 text-100 row-span-2 row-start-1 flex flex-col items-start gap-6 overflow-hidden ${visibleClasses}`}
    >
      <img src={logo} alt="Company logo" />

      <h2 className="text-500 text-heading-s w-max uppercase">My Documents</h2>

      <button
        className="bg-orange hover:bg-orange-hover text-heading-m w-max cursor-pointer rounded-sm px-12 py-3"
        onClick={addNewDocument}
      >
        + New Document
      </button>

      <ul className="w-max">{fileListItems}</ul>
    </nav>
  );
}
