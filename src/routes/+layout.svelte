<script>
  import { Flex, SvelteUIProvider } from "@svelteuidev/core";
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
    <div class="page">
      <div class="top">
        <Header />
        <!-- De slot is waar de website zelf in staat dus /routes/+page.svelte -->
        <slot {color} />
      </div>
      <!-- Hier wordt de Footer er in gepleurt -->
      <Footer />
    </div>
  </SvelteUIProvider>
</main>

<style>
  .page {
    /* Hier maak ik een flex zodat de footer altijd beneden van de page is */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
