<script>
  import {
    Breadcrumbs,
    Flex,
    IconRenderer,
    SvelteUIProvider,
  } from "@svelteuidev/core";
  import Fa from "svelte-fa";
  import Footer from "../Components/Footer.svelte";
  import { faHouse } from "@fortawesome/free-solid-svg-icons";
  import { transitionPage, title } from "$lib/stores";
  import { onMount } from "svelte";
  let color = {};
  console.log(color);
  let updateTransitionPage = (transitionPage) => {};
  $: updateTransitionPage($transitionPage);
  onMount(() => {
    updateTransitionPage = (transitionPage) => {
      if (transitionPage) {
        // set all transitionDiv divs to translateX(0)
        document.querySelectorAll("#transitionId div").forEach((div) => {
          div.style.width = "100%";
        });
        // set .transitionDiv align-items: flex-start;
        document.querySelector("#transitionId").style.alignItems = "flex-start";
      } else {
        // set all transitionDiv divs to translateX(-100%)
        document.querySelectorAll("#transitionId div").forEach((div) => {
          div.style.width = "0%";
        });
        // set .transitionDiv align-items: flex-end;
        document.querySelector("#transitionId").style.alignItems = "flex-end";
      }
    };
  });
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
        <div class="transitionDiv" id="transitionId">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Breadcrumbs
          size="md"
          override={{
            marginTop: "25px",
          }}
        >
          <Breadcrumbs.Item href="/">
            <Fa icon={faHouse} />
          </Breadcrumbs.Item>
          <Breadcrumbs.Item active={true}>{$title}</Breadcrumbs.Item>
        </Breadcrumbs>
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
    display: grid;
    grid-template-rows: 1fr auto;
    /* center items*/
    align-items: center;
    padding: 0 25px;
  }
  .top {
    /* Hier maak ik een flex zodat de footer altijd beneden van de page is */
    flex: 1;
    height: 100%;
  }
  .transitionDiv {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 500;
    overflow: hidden;
    pointer-events: none;
    /* align insides to left */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .transitionDiv div {
    background-color: white;
    width: 0%;
    height: calc(100vh / 5);
    pointer-events: all;
  }
  .transitionDiv div:nth-child(1) {
    transition: all 0.5s ease 0.4s;
  }
  .transitionDiv div:nth-child(2) {
    transition: all 0.5s ease 0.3s;
  }
  .transitionDiv div:nth-child(3) {
    transition: all 0.5s ease 0.2s;
  }
  .transitionDiv div:nth-child(4) {
    transition: all 0.5s ease 0.1s;
  }
  .transitionDiv div:nth-child(5) {
    transition: all 0.5s ease 0.01s;
  }
  @media (max-width: 768px) {
    .page {
      padding: 0 5px;
    }
  }
</style>
