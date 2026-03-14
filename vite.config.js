import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
base: "/Visharc-project/",   // GitHub Pages repository name
plugins: [
react(),
tailwindcss(),
],
});
