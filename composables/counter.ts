import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0);
    function increment() {
      count.value++;
    }
    function reset() {
      count.value = 0;
    }
    return { count, increment, reset };
  },
  {
    persist: true, // enable the store to be persisted
  }
);
