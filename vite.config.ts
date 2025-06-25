import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsConfigPaths(),
	],
	// resolve: {
	// 	alias: {
	// 		"@": path.resolve(__dirname, "src"),
	// 	},
	// },
	server: {
		watch: {
			usePolling: true
		}
	}
});
