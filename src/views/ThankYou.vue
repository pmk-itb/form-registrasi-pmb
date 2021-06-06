<template>
  <div class="flex flex-col items-center space-y-10 md:space-y-20">
    <!-- Header component begin -->
    <Header />
    <!-- Header component end -->
    <!-- Floating Box component begin -->
    <FloatingBox>
      <img class="w-48 md:w-auto" src="../assets/thank-you-phone.svg" />
      <h2 class="font-bold font-roboto text-xl md:text-4xl text-blue-primary">Thank You!</h2>
      <div class="font-normal font-roboto text-xs md:text-sm text-gray-secondary">
        Your data has been saved at Intern PMK ITB
      </div>
    </FloatingBox>
    <!-- Floating Box component end -->
    <!-- Contact Us component begin -->
    <Footer />
    <!-- Contact Us component end -->
  </div>
  <div></div>
</template>

<script setup lang="ts">
import Header from '../components/UI/Header.vue';
import Footer from '../components/UI/Footer.vue';
import FloatingBox from '../components/UI/FloatingBox.vue';
</script>
