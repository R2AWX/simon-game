<template>
  <div class="game-board">
    <game-control @start-game="handleStartGame" />
    <div class="round-counter">Round: {{ currentRound }}</div>
    <div class="buttons">
      <game-button
        v-for="color in ['red', 'blue', 'green', 'yellow']"
        :key="color"
        :color="color"
        :isActive="activeColor === color"
        :playSound="playSound"
        @button-click="handleButtonClick"
      />
    </div>
    <div v-if="gameOver" class="overlay">
      Game Over! Score: {{ sequence.length - 1 }}
      <button @click="startGame">Restart</button>
    </div>
  </div>
</template>

<script>
import GameButton from "./GameButton.vue";
import GameControl from "./GameControl.vue";

export default {
  components: {
    GameButton,
    GameControl,
  },
  data() {
    return {
      sequence: [],
      userInput: [],
      activeColor: "",
      gameOver: false,
      gameDelay: 1000,
      currentRound: 0,
    };
  },
  methods: {
    handleStartGame(difficulty) {
      this.setGameDifficulty(difficulty);
      this.startGame();
    },
    setGameDifficulty(difficulty) {
      switch (difficulty) {
        case "easy":
          this.gameDelay = 1500;
          break;
        case "medium":
          this.gameDelay = 1000;
          break;
        case "hard":
          this.gameDelay = 400;
          break;
      }
    },
    startGame() {
      this.sequence = [];
      this.userInput = [];
      this.gameOver = false;
      this.addColor();
      this.currentRound = 1;
    },
    addColor() {
      const colors = ["red", "blue", "green", "yellow"];
      this.sequence.push(colors[Math.floor(Math.random() * colors.length)]);
      this.playSequence();
      this.currentRound++;
    },
    playSequence() {
      let index = 0;
      const interval = setInterval(() => {
        this.activeColor = this.sequence[index];
        this.playSound(this.activeColor);
        index++;
        if (index >= this.sequence.length) {
          setTimeout(() => {
            this.activeColor = "";
          }, this.gameDelay);
          clearInterval(interval);
        }
      }, this.gameDelay);
    },
    handleButtonClick(color) {
      this.userInput.push(color);
      this.checkInput();
    },
    checkInput() {
      for (let i = 0; i < this.userInput.length; i++) {
        if (this.userInput[i] !== this.sequence[i]) {
          this.gameOver = true;
          return;
        }
      }
      if (this.userInput.length === this.sequence.length) {
        this.userInput = [];
        setTimeout(() => {
          this.addColor();
        }, 1000);
      }
    },
    playSound(color) {
      const audio = new Audio(`/sounds/${color}.mp3`);
      audio.play();
    },
  },
};
</script>
