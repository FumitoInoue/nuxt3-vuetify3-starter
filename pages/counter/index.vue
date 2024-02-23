<template>
  <VContainer fluid class="fill-height d-flex justify-center">
    <VCard>
      <VCardTitle class="headline">Counter</VCardTitle>
      <VCardSubtitle>Simple counter example</VCardSubtitle>
      <VCardText>
        <h1>{{ counter.count }}</h1>
        <pre>{{ test }}</pre>
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

//const { data: test } = useFetch("https://api.github.com/users/posva");
const { data: test } = useFetch("/api/hello");
const counter = useCounterStore();
</script>
