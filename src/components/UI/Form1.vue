<template>
  <FloatingBox2>
    <h2 class="font-roboto font-bold text-2xl leading-3 text-blue-primary">Biodata</h2>
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
    <div class="h-6"></div>
    <FormContainer>
      <FormContainerRight>
        <button class="sc" type="submit" @click="$router.push('Form2')">Save & Continue</button>
      </FormContainerRight>
    </FormContainer>
  </FloatingBox2>
</template>

<style>
input[type='text'],
input[type='number'],
input[type='date'],
select {
  width: 95%;
  height: 1.6rem;
}

.sc {
  color: #4d76b7;
  font-size: 0.65rem;
  font-weight: bold;
  border: 0.188rem solid #4d76b7;
  background: white;
  width: 8rem;
  height: 1.6rem;
}

.sc:hover {
  border: 0.2rem solid #91b1e2;
}
</style>

<script setup lang="ts">
import FloatingBox2 from './FloatingBox2.vue';
import FormContainer from './FormContainer.vue';
import FormContainerLeft from './FormContainerLeft.vue';
import FormContainerRight from './FormContainerRight.vue';
</script>
