<script>
  // Importeer de vereiste modules
  import { fly } from "svelte/transition";
  import PageScroller from "../../Components/PageScroller.svelte";

  // Initialiseer de paginateller
  let page = 0;
</script>

<!-- Definieer de inhoud van de head-sectie -->
<svelte:head>
  <title>Opleiding</title>
  <meta name="description" content="Opleiding" />
  <meta name="keywords" content="Opleiding" />
  <meta name="author" content="Youri" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<!-- Hoofdinhoud van de pagina -->
<main>
  <div class="divider">
    <div class="infoContainer">
      <!-- Sectie voor pagina 0 -->
      {#if page == 0}
        <div
          class="infoItem"
          in:fly={{ x: 50, duration: 250, delay: 250 }}
          out:fly={{ x: -50, duration: 250 }}
        >
          <h1 class="titleName">Opleiding</h1>
          <div class="split">
            <p class="description">
              Ik zit op het moment op het <a href="https://noorderpoort.nl/"
                >Noorderpoort</a
              > in Groningen. Ik doe daar de opleiding Expert IT systems and devices.
              Ik zit nu in de 1e klas en ik vind het tot nu toe een leuke opleiding.
            </p>
            <img
              src="/img/noorderpoort.jpg"
              class="descriptionImg"
              alt=""
              width="400px"
            />
          </div>
        </div>
      {/if}

      <!-- Sectie voor pagina 1 -->
      {#if page == 1}
        <div
          class="infoItem"
          in:fly={{ x: 50, duration: 250, delay: 250 }}
          out:fly={{ x: -50, duration: 250 }}
        >
          <h1 class="titleName">Vakken</h1>
          <p class="description">
            Zelf vind ik tables lelijk om in een website te pleuren maar het
            moest...
          </p>
        </div>
      {/if}
    </div>
  </div>

  <!-- Voeg de paginascroller toe en bind deze aan de paginateller -->
  <PageScroller bind:selected={page} amount={2} />
</main>

<!-- Definieer de stijlregels voor de pagina -->
<style>
  .divider {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 125px);
  }
  .titleName {
    font-size: 3rem;
    margin: 5px;
    text-align: center;
  }
  .description {
    font-size: 1.5rem;
    margin: 0;
    color: #bababa;
  }
  .descriptionImg {
    border-radius: 15px;
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.3);
  }
  .infoContainer {
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 1fr;
  }
  .infoItem {
    grid-row: 1;
    grid-column: 1;
    margin: 0 auto;
    max-width: 800px;
  }
  .split {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    max-width: 800px;
  }
  a {
    color: #bababa;
  }
  a:hover {
    color: #afafaf;
  }
</style>
