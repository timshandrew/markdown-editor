import { DarkModeIcon, LightModeIcon } from "../SVGComponents";
import { Switch } from "./switch";

export default function ThemeSwitch({ theme, switchTheme, className }) {
  return (
    <div className={`flex cursor-pointer gap-2 ${className}`}>
      <LightModeIcon className={theme === "light-theme" && "fill-100"} />
      <Switch className="cursor-pointer" onClick={switchTheme} />
      <DarkModeIcon className={theme === "dark-theme" && "fill-100"} />
    </div>
  );
}
