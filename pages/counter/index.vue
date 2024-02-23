<template>
  <VContainer fluid class="fill-height d-flex justify-center">
    <VCard>
      <VCardTitle class="headline">Counter</VCardTitle>
      <VCardSubtitle>Simple counter example</VCardSubtitle>
      <VCardText>
        <h1>{{ counter.count }}</h1>
      </VCardText>
      <VCardActions>
        <VBtn @click="counter.increment" type="submit" class="gradient primary">Increment</VBtn>
        <VBtn @click="counter.reset" type="submit" class="gradient warn">reset</VBtn>
      </VCardActions>
    </VCard>
  </VContainer>
</template>

<script setup>
import { useCounterStore } from "@/composables/counter";

const counter = useCounterStore();
</script>
