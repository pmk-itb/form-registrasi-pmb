<template>
  <div class="flex flex-col items-center">
    <!-- Header component begin -->

    <!-- Header component end -->
    <!-- Floating Box component begin -->
    <FloatingBox>
      <img class="w-48 md:w-auto" src="../assets/thank-you-phone.svg" />
      <h2 class="font-bold font-roboto text-xl md:text-4xl text-blue-thank-you">Thank You!</h2>
      <div class="font-normal font-roboto text-xs md:text-sm">Your data has been saved at Intern PMK ITB</div>
    </FloatingBox>
    <!-- Floating Box component end -->
    <!-- Contact Us component begin -->

    <!-- Contact Us component end -->
  </div>
  <div></div>
</template>

<script setup lang="ts">
import FloatingBox from '../components/UI/FloatingBox.vue';
</script>
