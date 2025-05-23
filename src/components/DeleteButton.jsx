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
        <DialogContent>
          <DialogTitle>Delete this document?</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the ‘welcome.md’ document and its
            contents? This action cannot be reversed.
          </DialogDescription>
          <DialogClose>
            <button onClick={deleteCurrentFile}>Confirm & Delete</button>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
