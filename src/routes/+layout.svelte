<script>
  import { SvelteUIProvider } from "@svelteuidev/core";
  import Header from "../Components/Header.svelte";
  import Footer from "../Components/Footer.svelte";
  let color = {
    primary: {
      100: "#D4DCFF",
      200: "#A9B4FF",
      300: "#7E8CFF",
      400: "#5364FF",
      500: "#283CFF",
      600: "#0014FF",
      700: "#0000CC",
      800: "#000099",
      900: "#000066",
    },
    secondary: {
      100: "#FFE6D4",
      200: "#FFC9A9",
      300: "#FFAC7E",
      400: "#FF8F53",
      500: "#FF7214",
      600: "#CC5900",
      700: "#994000",
      800: "#662700",
      900: "#331400",
    },
    tertiary: {
      100: "#D4FFE6",
      200: "#A9FFC9",
      300: "#7EFFAC",
      400: "#53FF8F",
      500: "#14FF72",
      600: "#00CC59",
      700: "#009940",
      800: "#006627",
      900: "#003314",
    },
  };
  console.log(color);
</script>

<svelte:head>
  <link rel="preconnect" href="https://api.fonts.coollabs.io" />
  <link rel="icon" href="" />
</svelte:head>

<main>
  <!-- Hier komt een stukie code van een library die ik later wil gebruiken -->
  <SvelteUIProvider>
    <!-- Hier wordt de Header er in gepleurt -->
    <Header />
    <!-- De slot is waar de website zelf in staat dus /routes/+page.svelte -->
    <slot {color} />
    <!-- Hier wordt de Footer er in gepleurt -->
    <Footer />
  </SvelteUIProvider>
</main>
