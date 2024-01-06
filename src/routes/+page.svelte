<script>
  // Importeren van noodzakelijke modules en componenten
  import { loaded, pageTransition, title } from "$lib/stores"; // Svelte stores
  import { Button } from "@svelteuidev/core"; // UI component
  import { typewriter } from "@svelteuidev/motion"; // Bewegingseffect
  import { cubicOut } from "svelte/easing"; // Easing functie
  import { fade, fly } from "svelte/transition"; // Overgangseffecten

  // De titel instellen op een lege string
  $title = "";

  // De initiële geladen toestand opslaan
  const pageOldLoaded = $loaded;

  // De geladen toestand instellen op true na een vertraging van 0ms
  setTimeout(() => {
    $loaded = true;
  }, 0);

  // Array van paginalinks
  let pagesLinks = [
    {
      name: "Over Mij",
      link: "/over-mij",
    },
    {
      name: "Opleiding",
      link: "/opleiding",
    },
    {
      name: "Mijn Werk",
      link: "/mijn-werk",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  // Functie om te wachten voor een gespecificeerde hoeveelheid tijd
  async function wait(ms) {
    // Geeft een belofte terug die oplost na een vertraging van 'ms' milliseconden
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
</script>

<!-- Definieer de inhoud van de head-sectie -->
<svelte:head>
  <!-- Meta data voor de website -->
  <title>Home</title>
  <meta name="description" content="Home" />
  <meta name="keywords" content="Home Pagina" />
  <meta name="author" content="Youri" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<!-- Hoofdinhoud van de pagina -->
<div class="center">
  <div class="infoContainer">
    <div class="titleContainer">
      {#if $loaded}
        <div class="titleText">
          <div class="titleIcon">👋</div>
          <h1 in:typewriter={{ speed: 1.5 }}>Hoi, welkom bij mijn website!</h1>
        </div>
        <div
          class="titleDescription"
          transition:fade={{
            delay: 2000,
            duration: 800,
            easing: cubicOut,
          }}
        >
          Wat brengt jou hier?
        </div>
        <div class="links">
          {#each pagesLinks as page, i}
            {#await wait(i * (pageOldLoaded ? 0 : 200)) then}
              <div
                transition:fly={{
                  delay: pageOldLoaded ? 0 : 3000,
                  x: 100,
                  duration: pageOldLoaded ? 0 : 800,
                  easing: cubicOut,
                }}
              >
                <!-- Display your button here -->
                <Button
                  on:click={() => {
                    $pageTransition.goto(page.link);
                  }}
                  color="white"
                  override={{
                    color: "black",
                  }}>{page.name}</Button
                >
              </div>
            {/await}
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<!-- Definieer de stijlregels voor de pagina -->
<style>
  .links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
    margin: 0 100px;
  }
  .center {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
  }
  .titleIcon {
    font-size: 4rem;
  }
  .titleText {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .titleText h1 {
    font-size: 3rem;
    margin: 0;
  }
  .titleIcon {
    animation: rotate 1s infinite;
  }
  .titleDescription {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
    color: var(--black-100);
    margin-bottom: 50px;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media (max-width: 800px) {
    .center {
      height: max-content;
    }
    .titleText {
      flex-direction: column;
      gap: 0px;
    }
    .links {
      margin: 0;
      overflow: hidden;
    }
  }
</style>
