import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { TrashCanIcon } from "./SVGComponents.jsx";

export default function DeleteButton({
  menuOpen,
  currentFileIndex,
  currentFileName,
  setCurrentFileIndex,
  setMarkdown,
}) {
  function deleteCurrentFile() {
    if (currentFileIndex > 0) {
      setMarkdown((oldMd) =>
        structuredClone(
          oldMd.filter((file, index) => index !== currentFileIndex),
        ),
      );
      setCurrentFileIndex((oldIndex) => (oldIndex === 0 ? 0 : oldIndex - 1));
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`me-3 cursor-pointer ${menuOpen ? "hidden" : "block"}`}
        >
          <TrashCanIcon className="hover:fill-orange" />
        </button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="font-roboto-slab">
          <DialogTitle className="text-preview-h4 font-roboto-slab mb-4">
            Delete this document?
          </DialogTitle>
          <DialogDescription className="text-preview-p text-500 mb-4">
            Are you sure you want to delete the '{currentFileName}' document and
            its contents? This action cannot be reversed.
          </DialogDescription>
          <DialogClose>
            <button
              className="bg-orange font-roboto-reg text-100 hover:bg-orange-hover w-full cursor-pointer rounded-md py-2"
              onClick={deleteCurrentFile}
            >
              Confirm & Delete
            </button>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
