<template>
  <div
    id="form-page"
    class="flex flex-col justify-center w-screen items-center space-y-10 md:space-y-20 overflow-hidden relative"
  >
    <Header />
    <Circle />
    <FloatingBox class="pt-7 pb-11 md:w-10/12">
      <PageIndicator />
      <FormNavigateButtonGroup />
    </FloatingBox>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/UI/Header.vue';
import Footer from '../components/UI/Footer.vue';
import FloatingBox from '../components/UI/FloatingBox.vue';
import PageIndicator from '../components/Pagination/PageIndicator.vue';
import FormNavigateButtonGroup from '../components/Pagination/FormNavigateButtonGroup.vue';
import Circle from '../components/UI/Circle.vue';
</script>
