<script>
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
  import { UnstyledButton } from "@svelteuidev/core";
  import Fa from "svelte-fa";
  export let amount = 2;
  export let selected = 0;
</script>

<main>
  <div class="pageScrollContainer">
    <UnstyledButton
      disabled={selected === 0}
      on:click={() => {
        if (selected > 0) selected = selected - 1;
      }}
    >
      <div class={`pageButton ${selected === 0 ? "disabled" : ""}`}>
        <Fa icon={faChevronLeft} color="white" />
      </div>
    </UnstyledButton>
    {#each Array(amount) as _, i}
      <UnstyledButton
        on:click={() => {
          selected = i;
        }}
      >
        <div
          class={`pageItem ${selected === i ? "selected" : ""}`}
          id={`item_${i}`}
        ></div>
      </UnstyledButton>
    {/each}
    <UnstyledButton
      disabled={selected === amount - 1}
      on:click={() => {
        if (selected < amount - 1) selected = selected + 1;
      }}
    >
      <div class={`pageButton ${selected === amount - 1 ? "disabled" : ""}`}>
        <Fa icon={faChevronLeft} color="white" rotate="180" />
      </div>
    </UnstyledButton>
  </div>
</main>

<style>
  .pageScrollContainer {
    /* align to middle */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pageItem {
    width: 15px;
    height: 15px;
    background-color: black;
    border-radius: 50%;
    margin: 0 10px;
    transition: all 0.15s ease-in-out;
  }
  .pageItem:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  .pageItem.selected {
    background-color: antiquewhite;
  }
  .pageButton {
    outline: antiquewhite solid 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.354);
  }

  .pageButton.disabled {
    background-color: rgba(128, 128, 128, 0);
    cursor: not-allowed;
  }
</style>
