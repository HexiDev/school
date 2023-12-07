<script>
  import { SvelteUIProvider } from "@svelteuidev/core";
  import Header from "../Components/Header.svelte";
  import Footer from "../Components/Footer.svelte";
  let color = {};
  console.log(color);
</script>

<svelte:head>
  <link rel="preconnect" href="https://api.fonts.coollabs.io" />
  <link rel="stylesheet" href="/style.css" />
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
