import documentImg from "../assets/icon-document.svg";
import burgerMenuImg from "../assets/icon-menu.svg";
import deleteImg from "../assets/icon-delete.svg";
import saveImg from "../assets/icon-save.svg";

export default function Header({ setMenuOpen }) {
  return (
    <header className="bg-800 text-100 col-start-2 row-start-1 flex h-[4rem] items-center gap-3">
      <button
        className="bg-700 h-full flex-[0_0_4rem] cursor-pointer"
        onClick={() => setMenuOpen((currentValue) => !currentValue)}
      >
        <img className="mx-auto" src={burgerMenuImg} />
      </button>

      <img className="h-6" src={documentImg} alt="Document icon" aria-hidden />

      <h1 className="text-heading-m flex-1">openfile.md</h1>

      <button className="cursor-pointer">
        <img className="h-6" src={deleteImg} alt="Trash can icon" />
      </button>

      <button className="bg-orange me-3 flex aspect-square basis-10 cursor-pointer items-center rounded-lg">
        <img className="mx-auto h-6" src={saveImg} alt="Floppy disk icon" />
      </button>
    </header>
  );
}
