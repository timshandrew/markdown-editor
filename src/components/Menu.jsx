import FileListItem from "./FileListItem";

export default function Menu({ visible }) {
  const visibleClasses = visible ? "w-auto p-4" : "w-0 p-0";

  return (
    <nav
      className={`bg-orange text-100 row-span-2 row-start-1 overflow-hidden py-4 ${visibleClasses}`}
    >
      <h1 className="w-max">Markdown</h1>
      <h2 className="w-max">My Documents</h2>
      <button className="w-max">+ New Document</button>
      <ul className="w-max">
        <FileListItem creationDate="01-01-2025" fileName="fileA.md" />
      </ul>
    </nav>
  );
}
