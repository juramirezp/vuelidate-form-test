import { defineConfig } from "vite";
// import ignoreImport from "rollup-plugin-ignore-import";

export default defineConfig({
	publicDir: "./public",
	build: {
		minify: false,
		rollupOptions: {
			external: false,
		},
		// rollupOptions: {
		// 	plugins: [
		// 		ignoreImport({
		// 			// Ignore all .scss and .css file imports while building the bundle
		// 			extensions: ["**/*.css"],
		// 			// Optional: replace body for ignored files. Default value is "export default undefined;"
		// 			body: "export default undefined;",
		// 		}),
		// 	],
		// },
	},
});
