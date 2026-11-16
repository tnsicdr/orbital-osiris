import styles from "./SideBar.module.css";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { useSideBarStore } from "./hooks/useSideBarStore";

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
          <li>main</li>
          <li>about</li>
        </ul>
      </nav>
    </div>
  );
}
