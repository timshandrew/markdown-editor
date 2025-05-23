import { ShowPreviewIcon, HidePreviewIcon } from "./SVGComponents.jsx";

export default function PreviewToggle({
  fullWidthPreview,
  setPreviewVisible,
  className,
}) {
  return (
    <button
      className={`group bg-background-header order-last row-start-1 cursor-pointer px-2 ${className}`}
      onClick={() => setPreviewVisible(!fullWidthPreview)}
    >
      {fullWidthPreview ? (
        <HidePreviewIcon className="fill-text-secondary group-hover:fill-orange" />
      ) : (
        <ShowPreviewIcon className="fill-text-secondary group-hover:fill-orange" />
      )}
    </button>
  );
}
