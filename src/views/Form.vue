<template>
  <div
    id="form-page"
    class="flex flex-col justify-center w-screen items-center space-y-10 md:space-y-20 overflow-hidden relative"
  >
    <Header />
    <Circle />
    <FloatingBox class="pt-7 pb-11 md:w-10/12">
      <PageIndicator />
      <FormContainer>
        <FormContainerLeft>
          <form>
            <label class="text-left block mt-6 mb-2" for="name"> NAMA LENGKAP </label>
            <input id="name" type="text" name="name" />
            <label class="text-left block mt-6 mb-2" for="nickname"> NAMA PANGGILAN </label>
            <input id="nickname" type="text" name="nickname" />
            <p class="mt-6 mb-3">JENIS KELAMIN</p>
            <label class="radio-inline"> <input class="mr-2 my-2" type="radio" name="gender" />Laki-laki </label>
            <label class="radio-inline"> <input class="mr-2 ml-10 my-2" type="radio" name="gender" />Perempuan </label>
            <label class="text-left block mt-6 mb-2" for="bdate"> TANGGAL LAHIR </label>
            <input id="bdate " type="date" name="bdate" />
            <label class="text-left block mt-6 mb-2" for="pnumber"> NOMOR HANDPHONE PRIBADI </label>
            <input id="pnumber" type="number" name="pnumber" />
            <label class="text-left block mt-6 mb-2" for="enumber"> NOMOR HANDPHONE DARURAT </label>
            <input id="enumber" type="number" name="enumber" />
            <label class="text-left block mt-6 mb-2" for="idline"> ID LINE </label>
            <input id="idline" type="text" name="idline" />
            <label class="text-left block mt-6 mb-2" for="email"> EMAIL </label>
            <input id="email" type="text" name="email" />
          </form>
        </FormContainerLeft>
        <FormContainerRight>
          <form>
            <label class="text-left block mt-6 mb-2" for="nim"> NIM </label>
            <input id="nim" type="number" name="nim" />
            <label class="text-left block mt-6 mb-2" for="fakultas"> FAKULTAS </label>
            <select id="fakultas" name="fakultas">
              <option value="" disabled selected hidden></option>
              <option value="stei">STEI</option>
              <option value="fti">FTI</option>
              <option value="ftsl">FTSL</option>
            </select>
            <label class="text-left block mt-6 mb-2" for="kampus"> KAMPUS </label>
            <select id="kampus" name="kampus">
              <option value="" disabled selected hidden></option>
              <option value="ganesha">Ganesha</option>
              <option value="jatinangor">Jatinangor</option>
              <option value="cirebon">Cirebon</option>
            </select>
          </form>
        </FormContainerRight>
      </FormContainer>
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
import FormContainer from '../components/UI/FormContainer.vue';
import FormContainerLeft from '../components/UI/FormContainerLeft.vue';
import FormContainerRight from '../components/UI/FormContainerRight.vue';
</script>

<style>
input[type='text'],
input[type='number'],
input[type='date'] {
  width: 100%;
  height: 1.6rem;
}

form select {
  width: 100%;
}
</style>
