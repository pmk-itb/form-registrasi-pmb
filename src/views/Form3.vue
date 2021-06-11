<template>
  <div id="form-page" class="flex flex-col items-center space-y-10 md:space-y-20">
    <Header />
    <FloatingBox2>
      <FormContainer>
        <FormContainerLeft>
          <form>
            <label for="pktb"> NAMA PKTB </label>
            <input id="pktb" type="text" name="pktb" />
          </form>
        </FormContainerLeft>
        <FormContainerRight>
          <form>
            <label for="pktb"> NAMA KTB </label>
            <input id="ktb" type="text" name="ktb" />
          </form>
        </FormContainerRight>
      </FormContainer>
      <div class="h-6"></div>
      <FormContainer>
        <FormContainerLeft>
          <a class="text-xs font-bold text-blue-primary hover:text-xs hover:underline" href=""> &lt; Back </a>
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
  height: 1.5rem;
}

.submit:hover {
  border: 0.2rem solid #91b1e2;
}

input {
  width: 95%;
  height: 1.4rem;
}

label {
  text-align: left;
  display: block;
  margin: 1rem 0rem 0.1rem 0rem;
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
