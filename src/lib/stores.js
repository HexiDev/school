import { goto } from "$app/navigation";
import { writable } from "svelte/store";

const transitionPage = writable(false);
const pageTransition = writable({
  goto: async (link) => {
    transitionPage.set(true);
    // wait 400ms
    await new Promise((r) => setTimeout(r, 900));
    goto(link);
    transitionPage.set(false);
  },
  open: false,
});
const title = writable("");
const loaded = writable(false);

export { pageTransition, title, loaded, transitionPage };
