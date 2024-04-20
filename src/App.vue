<template>
  <div id="app">
    <header>
      <h1>Simon game</h1>
    </header>
    <main>
      <GameBoard />
    </main>
  </div>
</template>

<script>
import GameBoard from "./components/GameBoard.vue";

export default {
  name: "App",
  components: {
    GameBoard,
  },
};
</script>
