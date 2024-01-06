<script>
  // Voeg hier eventuele scriptcode toe indien nodig
</script>

<!-- Definieer de inhoud van de head-sectie -->
<svelte:head>
  <title>Mijn Werk</title>
  <meta name="description" content="Mijn Werk" />
  <meta name="keywords" content="Mijn Werk" />
  <meta name="author" content="Youri" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<!-- Hoofdinhoud van de pagina -->
<main>
  <div class="divider">
    <div class="infoContainer">
      <div class="infoItem">
        <h1 class="titleName">Mijn Werk</h1>
        <p class="description">
          Hieronder staan een paar van mijn projecten die ik heb gemaakt.
        </p>
        <br />
        <br />
        <br />
        <div class="projects">
          <a class="project" href="https://hexpredictor.com">
            <div class="background background0"></div>
            <img
              src="https://hexidev.nl/assets/img/PredictorLogo.png"
              class="logo"
            />
          </a>
          <a class="project" href="https://vectra.store" style="color: black">
            <div class="background background1"></div>
            <img src="https://vectra.store/logo.svg" class="logo svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
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
  .projects {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .project {
    position: relative;
    border-radius: 10px;
    min-width: 300px;
    min-height: 150px;
    transition: 0.2s all;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    text-decoration: none;
    overflow: hidden;
    border: 1px solid white;
    font-weight: bold;
    font-family: "Arial";
    font-variant: small-caps;
  }
  .background0 {
    background: url(https://hexidev.nl/assets/img/HexPredictor.png);
    background-size: cover;
    background-position: center;
  }
  .logo {
    width: 100px;
    transition: 0.2s all;
  }
</style>
