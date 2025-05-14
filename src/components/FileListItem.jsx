import fileIcon from "../assets/icon-document.svg";

export default function FileListItem({ creationDate, fileName }) {
  return (
    <li className="">
      <img src={fileIcon} />
      <span>{creationDate}</span>
      <span>{fileName}</span>
    </li>
  );
}
