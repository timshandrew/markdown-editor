import { DarkModeIcon, LightModeIcon } from "../SVGComponents";
import { Switch } from "./switch";

export default function ThemeSwitch({ theme, switchTheme, className }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <label className="cursor-pointer" htmlFor="themeSwitch">
        <DarkModeIcon className={theme === "dark" && "fill-100"} />
      </label>

      <Switch
        id="themeSwitch"
        className="cursor-pointer"
        onClick={switchTheme}
        checked={theme === "light"}
      />

      <label className="cursor-pointer" htmlFor="themeSwitch">
        <LightModeIcon className={theme === "light" && "fill-100"} />
      </label>
    </div>
  );
}
