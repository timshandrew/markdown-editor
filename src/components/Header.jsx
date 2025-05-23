import documentImg from "../assets/icon-document.svg";
import burgerMenuImg from "../assets/icon-menu.svg";
import closeMenuImg from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";
import saveImg from "../assets/icon-save.svg";

import { saveToLocalStorage } from "../utils/localStorageUtils.js";

import DeleteButton from "./DeleteButton";

export default function Header({
  setMenuOpen,
  setCurrentFileIndex,
  currentFileName,
  setMarkdown,
  currentFileIndex,
  menuOpen,
  markdown,
}) {
  return (
    <header className="bg-800 text-100 col-start-2 row-start-1 flex h-[4rem] items-center">
      <button
        className="bg-700 hover:bg-orange me-6 h-full flex-[0_0_4rem] cursor-pointer"
        onClick={() => setMenuOpen((currentValue) => !currentValue)}
      >
        <img
          className="mx-auto"
          src={menuOpen ? closeMenuImg : burgerMenuImg}
        />
      </button>

      <img
        className="me-4 hidden border-600 border-e-2 py-3 pe-4 lg:block"
        alt="Product logo"
        src={logo}
      />

      <div className="me-auto grid grid-cols-[auto_1fr] items-center lg:basis-[20rem]">
        <img
          className="row-span-2 me-4 h-5"
          src={documentImg}
          alt="Document icon"
          aria-hidden
        />
        <label className="text-body text-500 hidden lg:block" htmlFor="docName">
          Document Name
        </label>
        <input
          id="docName"
          type="text"
          className="text-heading-m caret-orange min-w-0 border-b-1 border-transparent overflow-ellipsis focus:border-100 focus:outline-0"
          defaultValue={currentFileName}
          key={currentFileName}
          onBlur={(e) =>
            setMarkdown((currentMd) => {
              let newMd = structuredClone(currentMd);
              newMd[currentFileIndex].name = e.target.value;
              return newMd;
            })
          }
        />
      </div>

      <DeleteButton
        setCurrentFileIndex={setCurrentFileIndex}
        setMarkdown={setMarkdown}
        currentFileIndex={currentFileIndex}
        menuOpen={menuOpen}
      />

      <button
        className={`bg-orange hover:bg-orange-hover me-3 flex cursor-pointer items-center gap-2 rounded-lg p-2 ${menuOpen ? "hidden" : "block"}`}
        onClick={() => saveToLocalStorage("markdownDb", markdown)}
      >
        <span className="text-heading-m order-2 hidden lg:block">
          Save Changes
        </span>
        <img className="mx-auto h-6" src={saveImg} alt="Floppy disk icon" />
      </button>
    </header>
  );
}
