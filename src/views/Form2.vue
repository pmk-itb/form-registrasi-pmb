<template>
  <div id="form-page" class="flex flex-col items-center space-y-10 md:space-y-20">
    <Header />
    <FloatingBox2>
      <h2 class="font-roboto font-bold text-2xl leading-3 text-blue-primary">Asal Daerah</h2>
      <FormContainer>
        <FormContainerLeft>
          <form>
            <label for="prov"> PROVINSI </label>
            <select id="prov" name="prov">
              <option value="" disabled selected hidden></option>
              <option value="provinsi1">Provinsi 1</option>
              <option value="provinsi2">Provinsi 2</option>
              <option value="provinsi3">Provinsi 3</option>
            </select>
            <label for="kota"> KOTA </label>
            <select id="kota" name="kota">
              <option value="" disabled selected hidden></option>
              <option value="kota1">Kota 1</option>
              <option value="kota2">Kota 2</option>
              <option value="kota3">Kota 3</option>
            </select>
            <label for="sekolah"> SEKOLAH </label>
            <select id="sekolah" name="sekolah">
              <option value="" disabled selected hidden></option>
              <option value="sekolah1">Sekolah 1</option>
              <option value="sekolah2">Sekolah 2</option>
              <option value="sekolah3">Sekolah 3</option>
            </select>
          </form>
        </FormContainerLeft>
        <FormContainerRight>
          <form>
            <label for="gereja"> GEREJA </label>
            <select id="gereja" name="gereja">
              <option value="" disabled selected hidden></option>
              <option value="gereja1">Gereja 1</option>
              <option value="gereja2">Gereja 2</option>
              <option value="gereja3">Gereja 3</option>
            </select>
          </form>
        </FormContainerRight>
      </FormContainer>
      <div class="h-6"></div>
      <FormContainer>
        <FormContainerLeft>
          <a class="text-xs font-bold text-blue-primary hover:text-xs hover:underline" href=""> &lt; Back </a>
        </FormContainerLeft>
        <FormContainerRight>
          <button class="sc" type="submit">Save & Continue</button>
        </FormContainerRight>
      </FormContainer>
    </FloatingBox2>
    <Footer />
  </div>
</template>

<style>
.sc {
  color: #4d76b7;
  font-size: 0.65rem;
  font-weight: bold;
  border: 0.188rem solid #4d76b7;
  background: white;
  width: 8rem;
  height: 1.5rem;
}

.sc:hover {
  border: 0.2rem solid #91b1e2;
}

select {
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
