import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default ({ mode }) => {
  return defineConfig({
  	base: '/trackOfTimeDashboard/',
    plugins: [
      react(),
    ],
  });
};