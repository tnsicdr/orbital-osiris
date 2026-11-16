/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";
import { playwright } from "@vitest/browser-playwright";

export default getViteConfig({
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        {
          browser: "chromium",
        },
      ],
    },
    globals: true,
    setupFiles: ["src/setupTests.ts"],
  },
});
