import styles from "./SideBar.module.css";
import { useSideBarStore } from "./hooks/useSideBarStore";

export function SideBar() {
  const { isOpen, handleNavToggle } = useSideBarStore();

  return (
    <div className={styles["sidebar-container"]} data-expanded={isOpen}>
      <button
        className={styles["toggle"]}
        onClick={handleNavToggle}
        tabIndex={0}
      >
        toggle btn
      </button>
      <div>cool logo thing</div>
      <nav>
        <ul>
          <li>main</li>
          <li>about</li>
        </ul>
      </nav>
    </div>
  );
}
