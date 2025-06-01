import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: "/add-to-cart/",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[jt]sx?$/,
  },
});
