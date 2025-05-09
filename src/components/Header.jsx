import documentImg from "../assets/icon-document.svg";
import burgerMenuImg from "../assets/icon-menu.svg";
import deleteImg from "../assets/icon-delete.svg";
import saveImg from "../assets/icon-save.svg";

export default function Header() {
  return (
    <header className="bg-800 text-100 flex justify-between">
      <button className="bg-600">
        <img src={burgerMenuImg} />
      </button>
      <img src={documentImg} alt="Document icon" aria-hidden />
      <h1>openfile.md</h1>
      <button>
        <img src={deleteImg} alt="Trash can icon" />
      </button>
      <button className="bg-orange">
        <img src={saveImg} alt="Floppy disk icon" />
      </button>
    </header>
  );
}
