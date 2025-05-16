import fileIcon from "../assets/icon-document.svg";

export default function FileListItem({ creationDate, fileName }) {
  return (
    <li className="grid cursor-pointer grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4">
      <img className="row-span-2" src={fileIcon} />
      <span className="text-500 text-body">{creationDate}</span>
      <span className="text-heading-m">{fileName}</span>
    </li>
  );
}
