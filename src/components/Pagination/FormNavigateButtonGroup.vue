<template>
  <template v-if="currentActivePageNumber === 1">
    <div class="flex justify-end items-center w-full px-8">
      <NextButton />
    </div>
  </template>
  <template v-else-if="currentActivePageNumber === MAX_PAGE_NUMBER">
    <div class="flex justify-between items-center w-full px-8">
      <BackButton />
      <SubmitButton />
    </div>
  </template>
  <template v-else>
    <div class="flex justify-between items-center w-full px-8">
      <BackButton />
      <NextButton />
    </div>
  </template>
</template>

<script setup lang="ts">
import NextButton from './Button/NextButton.vue';
import SubmitButton from './Button/SubmitButton.vue';
import BackButton from './Button/BackButton.vue';
import { MAX_PAGE_NUMBER } from '../../constants';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const currentActivePageNumber = computed(() => store.state.pages.currentActivePageNumber);
</script>
