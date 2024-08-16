<script setup>
const props = defineProps({
  visible: Boolean,
});
</script>

<template>
  <transition name="fade">
    <div class="pax-loading-modal" v-if="visible">
      <div class="pax-loading-modal__spinner"></div>
    </div>
  </transition>
</template>

<style scoped>
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.container {
  position: relative;
}

.pax-loading-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.pax-loading-modal__spinner {
  position: relative;
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.pax-loading-modal__spinner:after {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  border: 3px solid orange;
  content: "";
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  animation: spin 0.4s linear infinite;
}

.fade-enter &,
.fade-leave-to & {
  transform: scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
