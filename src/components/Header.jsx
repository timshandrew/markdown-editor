import documentImg from "../assets/icon-document.svg";
import burgerMenuImg from "../assets/icon-menu.svg";
import closeMenuImg from "../assets/icon-close.svg";
import deleteImg from "../assets/icon-delete.svg";
import saveImg from "../assets/icon-save.svg";
import logo from "../assets/logo.svg";

export default function Header({
  setMenuOpen,
  currentFileName,
  setMarkdown,
  currentFileIndex,
  menuOpen,
}) {
  return (
    <header className="bg-800 text-100 col-start-2 row-start-1 flex h-[4rem] items-center">
      <button
        className="bg-700 me-6 h-full flex-[0_0_4rem] cursor-pointer"
        onClick={() => setMenuOpen((currentValue) => !currentValue)}
      >
        <img
          className="mx-auto"
          src={menuOpen ? closeMenuImg : burgerMenuImg}
        />
      </button>

      <img
        className="me-4 hidden border-200 border-e-2 py-3 pe-4 lg:block"
        alt="Product logo"
        src={logo}
      />

      <div className="me-auto grid max-w-3/10 flex-1 grid-cols-[auto_1fr] items-center">
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
          className="text-heading-m focus:border-b-1 focus:outline-0"
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

      <button className="me-3 cursor-pointer">
        <img className="h-6" src={deleteImg} alt="Trash can icon" />
      </button>

      <button className="bg-orange hover:bg-orange-hover me-3 flex cursor-pointer items-center gap-2 rounded-lg p-2">
        <span className="text-heading-m order-2 hidden lg:block">
          Save Changes
        </span>
        <img className="mx-auto h-6" src={saveImg} alt="Floppy disk icon" />
      </button>
    </header>
  );
}
