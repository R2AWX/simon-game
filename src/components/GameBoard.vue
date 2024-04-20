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
      sequenceInterval: null,
      audioFiles: {
        red: new Audio("/sounds/red.mp3"),
        blue: new Audio("/sounds/blue.mp3"),
        green: new Audio("/sounds/green.mp3"),
        yellow: new Audio("/sounds/yellow.mp3"),
      },
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
    async playSequence() {
      for (let index = 0; index < this.sequence.length; index++) {
        this.activeColor = this.sequence[index];
        await this.playSound(this.activeColor);
        this.activeColor = "";
        await new Promise((resolve) => setTimeout(resolve, this.gameDelay));
      }
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
    async playSound(color) {
      const sound = this.audioFiles[color];
      if (sound) {
        sound.currentTime = 0;
        await sound.play();
      }
    },
    clearSequenceInterval() {
      if (this.sequenceInterval) {
        clearInterval(this.sequenceInterval);
        this.sequenceInterval = null;
        setTimeout(() => {
          this.activeColor = "";
        }, this.gameDelay / 2);
      }
    },
  },
};
</script>
