import { ShowPreviewIcon, HidePreviewIcon } from "./SVGComponents.jsx";

export default function PreviewToggle({
  fullWidthPreview,
  setPreviewVisible,
  className,
}) {
  return (
    <button
      className={`group my-dark-theme:bg-900 bg-200 order-last row-start-1 cursor-pointer px-2 ${className}`}
      onClick={() => setPreviewVisible(!fullWidthPreview)}
    >
      {fullWidthPreview ? (
        <HidePreviewIcon className="my-dark-theme:fill-400 group-hover:fill-orange" />
      ) : (
        <ShowPreviewIcon className="my-dark-theme:fill-400 group-hover:fill-orange" />
      )}
    </button>
  );
}
