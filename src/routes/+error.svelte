<script>
  import { page } from "$app/stores";
  import { Button } from "@svelteuidev/core";
</script>

<main>
  <div class="center">
    <h1 class="titleName">Error</h1>
    <p class="descriptionName">
      <!-- check if $page.url has /contact in it -->
      {#if JSON.stringify($page.url)?.includes("/contact")}
        Ja die form heb ik niet werkend gemaakt dus klik hierop:
        <Button
          override={{
            margin: "0 auto",
          }}
          on:click={() => (window.location.href = "/contact")}>Contact</Button
        >
      {:else}
        Het lijkt er op dat jij mischien wat kapot hebt gemaakt
      {/if}
    </p>
  </div>
</main>

<style>
  .center {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
  }
  .titleName {
    font-size: 3rem;
    margin: 0;
  }
  .descriptionName {
    font-size: 1.5rem;
    margin: 0;
    color: #bababa;
  }
</style>
