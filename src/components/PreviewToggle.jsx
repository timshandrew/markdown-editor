import showPreviewImg from "../assets/icon-show-preview.svg";
import hidePreviewImg from "../assets/icon-hide-preview.svg";

export default function PreviewToggle({ previewVisible, setPreviewVisible }) {
  const imgSrc = previewVisible ? hidePreviewImg : showPreviewImg;
  return (
    <button
      className="bg-200 order-last col-start-[-2] row-start-1 cursor-pointer px-2"
      onClick={() => setPreviewVisible(!previewVisible)}
    >
      <img src={imgSrc} />
    </button>
  );
}
