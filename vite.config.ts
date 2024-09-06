import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },

  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      devOptions: {
        enabled: true,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  // build: {
  //   lib: {
  //     entry: "./src/index.tsx",
  //     name: "components",
  //     fileName: (format) => `components.${format}.js`,
  //   },
  //   cssCodeSplit: false,
  //   target: "esnext",
  // },
});
