import showPreviewImg from "../assets/icon-show-preview.svg";
import hidePreviewImg from "../assets/icon-hide-preview.svg";

export default function PreviewToggle({ previewVisible }) {
  const imgSrc = previewVisible ? hidePreviewImg : showPreviewImg;
  return (
    <button className="bg-200 order-last">
      <img src={imgSrc} />
    </button>
  );
}
