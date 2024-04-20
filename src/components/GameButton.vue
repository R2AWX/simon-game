<template>
  <div
    :class="['button', color, buttonState]"
    @mousedown="pressButton"
    @mouseup="releaseButton"
    @mouseleave="releaseButton"
    @touchstart.prevent="pressButton"
    @touchend.prevent="releaseButton"
    @click="handleClick"
  ></div>
</template>

<script>
export default {
  props: {
    color: String,
    isActive: Boolean,
    playSound: Function,
  },
  computed: {
    buttonState() {
      if (this.isPressed) {
        return "pressed";
      } else if (this.isActive) {
        return "active";
      }
      return "";
    },
  },
  data() {
    return {
      isPressed: false,
    };
  },
  methods: {
    pressButton() {
      this.isPressed = true;
      this.playSound(this.color);
    },
    releaseButton() {
      this.isPressed = false;
    },
    handleClick() {
      this.$emit("button-click", this.color);
    },
  },
  watch: {
    isActive() {
      this.$nextTick(() => {
        this.playSound(this.color);
      });
    },
  },
};
</script>
