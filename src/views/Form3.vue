<template>
  <div id="form-page" class="flex flex-col items-center space-y-10 md:space-y-20">
    <Header />
    <Form3 />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/UI/Header.vue';
import Footer from '../components/UI/Footer.vue';
import Form3 from '../components/UI/Form3.vue';
</script>
