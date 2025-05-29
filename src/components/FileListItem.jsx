import { useContext } from "react";
import fileIcon from "../assets/icon-document.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ChangeTrackerContext } from "@/contexts/ChangeTrackerContext";

export default function FileListItem({
  creationDate,
  fileName,
  index,
  setCurrentFileIndex,
  selectedFileIndex,
  saveFile,
}) {
  const [hasChanges, _] = useContext(ChangeTrackerContext);

  const currentlySelected = selectedFileIndex === index;

  // If user tries to switch to the current file nothing happens - state remains the same.
  function handleClickWithoutSave() {
    setCurrentFileIndex(index);
  }

  return (
    <li className="not-last:mb-3">
      {hasChanges && !currentlySelected ? (
        <CloseDialog
          saveFile={saveFile}
          selectedFileIndex={selectedFileIndex}
          setCurrentFileIndex={setCurrentFileIndex}
          index={index}
          handleClickWithoutSave={handleClickWithoutSave}
        >
          <DialogTrigger asChild>
            <FileItemButton creationDate={creationDate} fileName={fileName} />
          </DialogTrigger>
        </CloseDialog>
      ) : (
        <FileItemButton
          creationDate={creationDate}
          fileName={fileName}
          onClick={handleClickWithoutSave}
        />
      )}
    </li>
  );
}

// Use of the arrow function syntax lets us define the function down here out of the way of the main component.
// This works due to the way arrow functions are hoisted.

const FileItemButton = ({ creationDate, fileName, onClick }) => {
  return (
    <button
      className="group grid cursor-pointer grid-cols-[auto_1fr] grid-rows-2 items-center justify-items-start gap-x-4"
      onClick={onClick}
    >
      <img className="row-span-2" src={fileIcon} />
      <span className="text-500 text-body">{creationDate}</span>
      <span className="text-heading-m group-hover:text-orange max-w-[10rem] overflow-hidden overflow-ellipsis whitespace-nowrap">
        {fileName}
      </span>
    </button>
  );
};

const CloseDialog = ({
  setCurrentFileIndex,
  index,
  saveFile,
  handleClickWithoutSave,
  children,
}) => {
  function handleClickWithSave() {
    saveFile();
    setCurrentFileIndex(index);
  }
  return (
    <Dialog>
      {children}

      <DialogContent className="font-roboto-slab">
        <DialogTitle className="mb-4">
          Document has unsaved changes.
        </DialogTitle>

        <DialogDescription className="text-preview-p mb-4">
          You have unsaved changes in the current document. If you do not save
          you will lose your changes!
        </DialogDescription>

        <DialogClose asChild>
          <ol>
            <li>
              <button
                className="bg-orange font-roboto-reg text-100 hover:bg-orange-hover mb-2 w-full cursor-pointer rounded-md py-2"
                onClick={handleClickWithSave}
              >
                Save & Continue
              </button>
            </li>
            <li>
              <button
                className="bg-orange font-roboto-reg text-100 hover:bg-orange-hover mb-2 w-full cursor-pointer rounded-md py-2"
                onClick={handleClickWithoutSave}
              >
                Continue and Lose Changes
              </button>
            </li>
          </ol>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
