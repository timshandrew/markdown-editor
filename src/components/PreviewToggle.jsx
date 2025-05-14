import showPreviewImg from "../assets/icon-show-preview.svg";
import hidePreviewImg from "../assets/icon-hide-preview.svg";

export default function PreviewToggle({
  fullWidthPreview,
  setPreviewVisible,
  className,
}) {
  const imgSrc = fullWidthPreview ? hidePreviewImg : showPreviewImg;
  return (
    <button
      className={`bg-200 order-last row-start-1 cursor-pointer px-2 ${className}`}
      onClick={() => setPreviewVisible(!fullWidthPreview)}
    >
      <img src={imgSrc} />
    </button>
  );
}
