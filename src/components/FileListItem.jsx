import { useContext } from "react";
import fileIcon from "../assets/icon-document.svg";
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
import { ChangeTrackerContext } from "@/contexts/ChangeTrackerContext";

export default function FileListItem({
  creationDate,
  fileName,
  setCurrentFileIndex,
  saveFile,
}) {
  const [hasChanges, _] = useContext(ChangeTrackerContext);

  function handleClick() {
    setCurrentFileIndex();
  }

  function handleClickWithSave() {
    saveFile();
    setCurrentFileIndex();
  }

  return (
    <li className="not-last:mb-3">
      {hasChanges ? (
        <Dialog>
          <DialogTrigger asChild>
            <button className="group grid cursor-pointer grid-cols-[auto_1fr] grid-rows-2 items-center justify-items-start gap-x-4">
              <img className="row-span-2" src={fileIcon} />
              <span className="text-500 text-body">{creationDate}</span>
              <span className="text-heading-m group-hover:text-orange max-w-[10rem] overflow-hidden overflow-ellipsis whitespace-nowrap">
                {fileName}
              </span>
            </button>
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay />
            <DialogContent className="font-roboto-slab">
              <DialogTitle className="text-preview-h4 font-roboto-slab mb-4">
                Document has unsaved changes.
              </DialogTitle>
              <DialogDescription className="text-preview-p text-500 mb-4">
                You have unsaved changes in the current document. If you do not
                save you will lose your edits!
              </DialogDescription>
              <DialogClose>
                <button
                  className="bg-orange font-roboto-reg text-100 hover:bg-orange-hover mb-2 w-full cursor-pointer rounded-md py-2"
                  onClick={handleClickWithSave}
                >
                  Save & Continue
                </button>

                <button
                  className="bg-orange font-roboto-reg text-100 hover:bg-orange-hover w-full cursor-pointer rounded-md py-2"
                  onClick={handleClick}
                >
                  Continue Without Saving
                </button>
              </DialogClose>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      ) : (
        <button
          className="group grid cursor-pointer grid-cols-[auto_1fr] grid-rows-2 items-center justify-items-start gap-x-4"
          onClick={handleClick}
        >
          <img className="row-span-2" src={fileIcon} />
          <span className="text-500 text-body">{creationDate}</span>
          <span className="text-heading-m group-hover:text-orange max-w-[10rem] overflow-hidden overflow-ellipsis whitespace-nowrap">
            {fileName}
          </span>
        </button>
      )}
    </li>
  );
}
