<template>
  <div id="form-page" class="flex flex-col items-center space-y-10 md:space-y-20">
    <Header />
    <FloatingBox2>
      <FormContainer>
        <FormContainerLeft>
          <form>
            <label class="text-left block mt-6 mb-2" for="pktb"> NAMA PKTB </label>
            <input id="pktb" type="text" name="pktb" />
          </form>
        </FormContainerLeft>
        <FormContainerRight>
          <form>
            <label class="text-left block mt-6 mb-2" for="ktb"> NAMA KTB </label>
            <input id="ktb" type="text" name="ktb" />
          </form>
        </FormContainerRight>
      </FormContainer>
      <div class="h-6"></div>
      <FormContainer>
        <FormContainerLeft>
          <router-link to="/Form2">
            <a class="text-xs font-bold text-blue-primary hover:text-xs hover:underline" href=""> &lt; Back </a>
          </router-link>
        </FormContainerLeft>
        <FormContainerRight>
          <button class="submit" type="submit">Submit</button>
        </FormContainerRight>
      </FormContainer>
    </FloatingBox2>
    <Footer />
  </div>
</template>

<style>
.submit {
  font-family: Roboto;
  color: white;
  font-size: 0.65rem;
  font-weight: bold;
  border: 0.188rem solid #4d76b7;
  background: #4d76b7;
  width: 8rem;
  height: 1.6rem;
}

.submit:hover {
  border: 0.2rem solid #91b1e2;
}

input[type='text'] {
  width: 95%;
  height: 1.6rem;
}
</style>

<script setup lang="ts">
import Header from '../components/UI/Header.vue';
import Footer from '../components/UI/Footer.vue';
import FloatingBox2 from '../components/UI/FloatingBox2.vue';
import FormContainer from '../components/UI/FormContainer.vue';
import FormContainerLeft from '../components/UI/FormContainerLeft.vue';
import FormContainerRight from '../components/UI/FormContainerRight.vue';
</script>
