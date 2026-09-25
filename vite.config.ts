import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import path from "path";

// Responsive widths generated for every `?responsive` image import
const RESPONSIVE_WIDTHS = [480, 960, 1600];

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools({
      // `import img from "@/assets/x.jpg?responsive"` resolves to a Picture
      // (avif + webp sources, jpg/png fallback) at build time
      defaultDirectives: async (url, metadata) => {
        if (!url.searchParams.has("responsive")) return new URLSearchParams();
        const { width = RESPONSIVE_WIDTHS[0], format } = await metadata();
        const widths = RESPONSIVE_WIDTHS.filter((w) => w < width);
        widths.push(Math.min(width, RESPONSIVE_WIDTHS[RESPONSIVE_WIDTHS.length - 1]));
        const fallback = format === "png" ? "png" : "jpg";
        return new URLSearchParams({
          w: widths.join(";"),
          format: `avif;webp;${fallback}`,
          quality: "72",
          as: "picture",
        });
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    minify: "esbuild",
    sourcemap: false,
    target: "es2020",
  },
}));
