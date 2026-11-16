import { useSideBarStore } from "../../hooks/useSideBarStore";
import { Menu, SquareChevronLeft, SquareChevronRight } from "lucide-react";
import styles from "./ToggleButton.module.css";

export function ToggleButton() {
  const { isOpen, handleNavToggle } = useSideBarStore();
  return (
    <button
      className={styles["toggle-button"]}
      aria-label="Toggle navigation"
      onClick={handleNavToggle}
    >
      <SquareChevronRight className={styles["icon"]} data-expanded={isOpen} />
    </button>
  );
}
