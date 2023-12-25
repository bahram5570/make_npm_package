import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/lib/useTimer.ts",
      name: "useTimer",
      fileName: `useTimer.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
