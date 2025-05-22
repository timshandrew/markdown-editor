import { DarkModeIcon, LightModeIcon } from "../SVGComponents";
import { Switch } from "./switch";

export default function ThemeSwitch({ theme, switchTheme, className }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <label className="cursor-pointer" htmlFor="themeSwitch">
        <LightModeIcon className={theme === "light-theme" && "fill-100"} />
      </label>

      <Switch
        id="themeSwitch"
        className="cursor-pointer"
        onClick={switchTheme}
      />

      <label className="cursor-pointer" htmlFor="themeSwitch">
        <DarkModeIcon className={theme === "dark-theme" && "fill-100"} />
      </label>
    </div>
  );
}
