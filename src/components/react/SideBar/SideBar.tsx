import { NavItems } from "../../../shared/content/navItems";
import styles from "./SideBar.module.css";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { useSideBarStore } from "./hooks/useSideBarStore";

const basePath = import.meta.env.BASE_URL;

export function SideBar() {
  const { isOpen } = useSideBarStore();

  return (
    <div className={styles["sidebar-container"]} data-expanded={isOpen}>
      <div className={styles["sidebar-controls"]}>
        <ToggleButton />
      </div>
      <div className={styles["sidebar-header"]} data-visible={!isOpen}>
        <h1>Orbital Osiris</h1>
      </div>
      <nav>
        <ul>
          {NavItems.map((item) => {
            return (
              <li key={`${item.label}-${item.path}`}>
                <a href={`${basePath}/${item.path}`}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
