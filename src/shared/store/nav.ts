import { atom } from "nanostores";

const defaultValue = true;

export const isNavOpen = atom(defaultValue);

export function toggleNav() {
  isNavOpen.set(!isNavOpen.get());
}

export function resetNav() {
  isNavOpen.set(defaultValue);
}
