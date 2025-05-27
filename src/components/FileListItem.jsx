import fileIcon from "../assets/icon-document.svg";

export default function FileListItem({
  creationDate,
  fileName,
  setCurrentFileIndex,
}) {
  return (
    <li>
      <button
        className="group grid cursor-pointer grid-cols-[auto_1fr] grid-rows-2 items-center justify-items-start gap-x-4"
        onClick={setCurrentFileIndex}
      >
        <img className="row-span-2" src={fileIcon} />
        <span className="text-500 text-body">{creationDate}</span>
        <span className="text-heading-m group-hover:text-orange max-w-[10rem] overflow-hidden overflow-ellipsis whitespace-nowrap">
          {fileName}
        </span>
      </button>
    </li>
  );
}
