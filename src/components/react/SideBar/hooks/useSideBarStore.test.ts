import { renderHook } from "vitest-browser-react";
import { useSideBarStore } from "./useSideBarStore";
import { resetNav, toggleNav } from "../../../../shared/store/nav";

describe("useSideBarStore", () => {
  beforeEach(() => {
    resetNav();
  });

  it("should return the default state", async () => {
    const { result, act } = await renderHook(() => useSideBarStore());

    expect(result.current.isOpen).toBe(true);
  });

  it("should toggle the nav state", async () => {
    const { result, act } = await renderHook(() => useSideBarStore());

    act(() => {
      toggleNav();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
