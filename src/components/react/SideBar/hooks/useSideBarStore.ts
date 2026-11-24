import { useStore } from "@nanostores/react";
import { useCallback } from "react";
import { isNavOpen, toggleNav } from "../../../../shared/store/nav";

export function useSideBarStore() {
  const isOpen = useStore(isNavOpen);

  const handleNavToggle = useCallback(() => {
    toggleNav();
  }, [toggleNav]);

  return {
    isOpen,
    handleNavToggle,
  };
}
