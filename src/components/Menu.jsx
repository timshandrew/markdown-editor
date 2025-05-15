import FileListItem from "./FileListItem";
import logo from "../assets/logo.svg";

export default function Menu({ visible }) {
  const visibleClasses = visible ? "w-max p-6 " : "w-0 p-0";

  return (
    <nav
      className={`bg-900 text-100 row-span-2 row-start-1 flex flex-col items-start gap-6 overflow-hidden ${visibleClasses}`}
    >
      <img src={logo} alt="Company logo" />
      <h2 className="text-500 text-heading-s w-max uppercase">My Documents</h2>
      <button className="bg-orange hover:bg-orange-hover text-heading-m w-max cursor-pointer rounded-sm px-12 py-3">
        + New Document
      </button>
      <ul className="w-max">
        <FileListItem creationDate="01-01-2025" fileName="fileA.md" />
      </ul>
    </nav>
  );
}
