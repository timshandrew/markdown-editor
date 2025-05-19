import { ShowPreviewIcon, HidePreviewIcon } from "./SVGComponents.jsx";

export default function PreviewToggle({
  fullWidthPreview,
  setPreviewVisible,
  className,
}) {
  return (
    <button
      className={`group bg-200 order-last row-start-1 cursor-pointer px-2 ${className}`}
      onClick={() => setPreviewVisible(!fullWidthPreview)}
    >
      {fullWidthPreview ? (
        <HidePreviewIcon className="group-hover:fill-orange" />
      ) : (
        <ShowPreviewIcon className="group-hover:fill-orange" />
      )}
    </button>
  );
}
