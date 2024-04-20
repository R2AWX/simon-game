<template>
  <div class="game-control">
    <button class="start-button" @click="startGame">Start Game</button>
    <select class="select-difficulty" v-model="difficulty">
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "GameControl",
  data() {
    return {
      difficulty: "easy",
    };
  },
  methods: {
    startGame() {
      this.$emit("start-game", this.difficulty);
    },
  },
};
</script>
