<script>
  import { title } from "$lib/stores";
  import { UnstyledButton } from "@svelteuidev/core";
  $title = "Kleuren";
  let hoveredColor = "";
  let colorVars = {
    primary: [
      "--primary-100",
      "--primary-200",
      "--primary-300",
      "--primary-400",
      "--primary-500",
      "--primary-600",
      "--primary-700",
      "--primary-800",
      "--primary-900",
    ],
    secondary: [
      "--secondary-100",
      "--secondary-200",
      "--secondary-300",
      "--secondary-400",
      "--secondary-500",
      "--secondary-600",
      "--secondary-700",
      "--secondary-800",
      "--secondary-900",
    ],
    tertiary: [
      "--tertiary-100",
      "--tertiary-200",
      "--tertiary-300",
      "--tertiary-400",
      "--tertiary-500",
      "--tertiary-600",
      "--tertiary-700",
      "--tertiary-800",
      "--tertiary-900",
    ],
  };
</script>

<main>
  <p>
    Hieronder vind je de kleuren die wij gebruiken in onze website. Deze kleuren
    zijn te vinden in de <code>style.css</code> file (+layout.svelte).
  </p>

  {#each Object.keys(colorVars) as color}
    <div class="color-container">
      {#each colorVars[color] as colorVar}
        <UnstyledButton
          override={{
            margin: "0 10px",
          }}
          on:click={() => {
            // set hoveredColor to the var of the clicked item and the converted color
            hoveredColor = `${colorVar} (${getComputedStyle(
              document.documentElement
            ).getPropertyValue(colorVar)})`;
            // set colorpicker color to the var of the clicked item
            document.querySelector(".colorPicker").style.backgroundColor =
              `var(${colorVar})`;
          }}
        >
          <div class="color" style={`background-color: var(${colorVar});`}>
            <p>Klik Mij</p>
          </div>
        </UnstyledButton>
      {/each}
    </div>
  {/each}

  <!-- show color of hovered item here -->
  <div class="colorPicker"><p>{hoveredColor}</p></div>
</main>

<style>
  .color-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
  }

  .color {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    transition: 0.2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .color p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    -webkit-text-stroke: 1px black;
  }
  .color:hover {
    transform: scale(1.1);
  }
  .colorPicker {
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    /* add font outline */
    width: 500px;
    text-align: center;
    margin: 0 auto;
  }
  .colorPicker p {
    /* make the text have a black outline so its easier to see */
    -webkit-text-stroke: 1px black;
    color: white;
    font-size: 2rem;
  }
</style>
