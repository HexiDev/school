<script>
  import PageScroller from "../../Components/PageScroller.svelte";
  let page;
</script>

<main>
  <div class="center">
    {#if page == 0}
      <h1 class="titleName">Ik</h1>
    {/if}
  </div>
  <PageScroller bind:selected={page} amount={3} />
</main>

<style>
  .center {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    min-height: 600px;
  }
  .titleName {
    font-size: 3rem;
    margin: 0;
  }
</style>
