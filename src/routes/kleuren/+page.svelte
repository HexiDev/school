<script>
  import { Button, Flex, UnstyledButton } from "@svelteuidev/core";

  let hoveredColor = "";
  let colorVars = {
    primary: {
      colors: [
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
    },
    secondary: {
      colors: [
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
    },
    tertiary: {
      colors: [
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
    },
  };
  // get random color primary, secondary or tertiary
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let colors;
  let randomColor;
  let jumpscareCounter = 0;
  let jumpscareTijd;
  let started;
  function randomJumscare() {
    colors = Object.keys(colorVars);
    randomColor = colors[getRandomInt(colors.length)];
    console.log(randomColor);
    colorVars[randomColor].jumpscare = getRandomInt(9);
    // set randomColor.jumpscare to a random variable 0-8
  }
  randomJumscare();
</script>

<main>
  <h1>Kleuren</h1>

  <p>
    Hieronder vind je de kleuren die wij gebruiken in onze website. Deze kleuren
    zijn te vinden in de <code>style.css</code> file (+layout.svelte).
  </p>
  <Flex justify="center">
    <p>Jumpscares: {jumpscareCounter}</p>
  </Flex>
  {#if started}
    {#each Object.keys(colorVars) as color}
      <div class="color-container">
        {#each colorVars[color]?.colors as colorVar}
          <UnstyledButton
            override={{
              margin: "0 10px",
            }}
            on:click={() => {
              if (color === randomColor) {
                // get the array index of the clicked item
                let index = colorVars[color].colors.indexOf(colorVar);
                if (index === colorVars[color].jumpscare) {
                  // show jumpscare
                  document.querySelector(".jumpscare").classList.add("active");
                  setTimeout(() => {
                    document
                      .querySelector(".jumpscare")
                      .classList.remove("active");
                    jumpscareCounter++;
                    randomJumscare();
                  }, 500);
                }
              }
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
  {:else}
    <UnstyledButton
      override={{
        width: "100%",
      }}
      on:click={() => {
        if (started === false) return;
        jumpscareCounter = 0;
        started = true;
        // set started to false after 10 seconds
        setTimeout(() => {
          started = false;
        }, 15000);
      }}
    >
      <div class="startKnop">
        {#if started === false}
          Goeie code je moet ff refreshen
        {:else}
          Start jumpscare
        {/if}
      </div>
    </UnstyledButton>
  {/if}

  <!-- show color of hovered item here -->
  <div class="colorPicker"><p>{hoveredColor}</p></div>
  <img src="./jumpscare.png" alt="" class="jumpscare" />
</main>

<style>
  main {
    padding: 0 100px;
  }
  .startKnop {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 350px;
    background-color: lightblue;
    border-radius: 25px;
  }
  .startKnop:hover {
    background-color: lightgreen;
  }
  .jumpscare {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* make it not visible so none */
    display: none;
  }
  :global(.active) {
    display: block !important;
  }
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
