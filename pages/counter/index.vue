<template>
  <VContainer fluid class="fill-height d-flex justify-center">
    <VCard class="w-25">
      <VCardTitle class="headline">Counter</VCardTitle>
      <VCardSubtitle>Simple counter example</VCardSubtitle>
      <VCardText>
        <h1>{{ counter.count }}</h1>
        <pre>{{ test }}</pre>

        <VTextField v-model="value" :error-messages="errorMessage" label="Email" />

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
import { useField } from 'vee-validate';
import * as yup from 'yup';

// validation
const { value, errorMessage } = useField("sample",
  yup.string().required("この項目は必須です").email("メールアドレスの形式で入力してください"));


// fetch data
const { data: test } = useFetch("/api/hello");
const counter = useCounterStore();
</script>
