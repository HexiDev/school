import { vitePreprocess } from "@sveltejs/kit/vite";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({}),
  },

  preprocess: [
    preprocess({
      postcss: false,
    }),
    vitePreprocess({}),
  ],
};

export default config;
