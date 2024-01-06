<script>
  // Importeer de vereiste modules
  import { fly } from "svelte/transition";
  import PageScroller from "../../Components/PageScroller.svelte";

  // Initialiseer de paginateller
  let page = 0;
</script>

<!-- Definieer de inhoud van de head-sectie -->
<svelte:head>
  <title>Over Mij</title>
  <meta name="description" content="Over Mij" />
  <meta name="keywords" content="Over Mij" />
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
          <h1 class="titleName">Ik</h1>
          <p class="description">
            Hoi, Ik ben Youri. Ik doe veel in de ICT wereld. Ik ben
            {Math.floor((new Date() - new Date(2006, 11, 28)) / 31536000000)} en
            heb het zo gemaakt dat mijn leeftijd op deze website altijd up-to-date
            is.<br /><br />(Vergeet niet om de volgende slide te bekijken!)
          </p>
        </div>
      {/if}

      <!-- Sectie voor pagina 1 -->
      {#if page == 1}
        <div
          class="infoItem"
          in:fly={{ x: 50, duration: 250, delay: 250 }}
          out:fly={{ x: -50, duration: 250 }}
        >
          <h1 class="titleName">Hobby's / Bijbaantje</h1>
          <p class="description">
            Ik heb een paar hobby's waar ik echt van geniet:
            <li>vissen</li>
            <li>programmeren</li>
            <br />
            Ik zat een tijdje terug bij de Albert Heijn, maar ben daar weggegaan
            omdat ik begon te werken met SaaS.<br /><br />SaaS houdt eigenlijk
            in dat je een dienst aanbiedt aan mensen of bedrijven. Tot nu toe
            heb ik al twee soorten websites gemaakt, beide in Svelte(kit). Niet
            alleen levert dit aanzienlijk meer op, maar het is ook nog eens
            ontzettend leuk om te doen.<br /><br />Mijn focus ligt momenteel op
            het snel kunnen werken, wat de reden is dat deze website vrij
            uitgebreid is. Ik probeer efficiëntie te combineren met kwaliteit.
            (Want dan verdien ik meer in kortere tijd 😁)
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
    min-height: calc(100svh - 125px);
  }
  .titleName {
    font-size: 3rem;
    margin: 0;
    text-align: center;
    color: white;
  }
  .description {
    margin: 5px;
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
    color: #bababa;
    font-size: 1.5rem;
  }
</style>
