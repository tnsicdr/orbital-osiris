import { NavItems } from "../../../shared/content/navItems";
import styles from "./SideBar.module.css";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { useSideBarStore } from "./hooks/useSideBarStore";
import { ReactIconMap } from "../../../shared/maps/reactIconMap";
import { FileText, type LucideIcon } from "lucide-react";

const basePath = import.meta.env.BASE_URL;

export function SideBar() {
  const { isOpen } = useSideBarStore();

  return (
    <div className={styles["sidebar-container"]} data-expanded={isOpen}>
      <div className={styles["sidebar-controls"]}>
        <ToggleButton />
      </div>
      <div className={styles["sidebar-header"]} data-visible={isOpen}>
        <h1>Orbital Osiris</h1>
      </div>
      <nav>
        <ul className={styles["nav-list"]}>
          {NavItems.map((item) => {
            const hasMappedIcon = !!(item.icon && ReactIconMap[item.icon]);
            const IconComponent = ReactIconMap[
              item.icon!
            ] as unknown as LucideIcon;

            return (
              <li key={`${item.label}-${item.path}`}>
                <a href={`${basePath}/${item.path}`} className={styles["link"]}>
                  <div className={styles["link-icon"]}>
                    {hasMappedIcon ? (
                      <IconComponent size={32} />
                    ) : (
                      <FileText size={32} />
                    )}
                  </div>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
