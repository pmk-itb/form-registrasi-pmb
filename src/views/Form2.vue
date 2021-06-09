<template>
  <div id="form-page" class="flex flex-col items-center space-y-10 md:space-y-20">
    <Header />
    <FloatingBox>
      <h2 class="asalDaerah">Asal Daerah</h2>
      <form class="formfield">
        <label for="prov"> PROVINSI </label>
        <select id="prov" name="prov">
          <option value="" disabled selected hidden></option>
          <option value="provinsi1">Provinsi 1</option>
          <option value="provinsi2">Provinsi 2</option>
          <option value="provinsi3">Provinsi 3</option>
        </select>
        <label for="gereja"> GEREJA </label>
        <select id="gereja" name="gereja">
          <option value="" disabled selected hidden></option>
          <option value="gereja1">Gereja 1</option>
          <option value="gereja2">Gereja 2</option>
          <option value="gereja3">Gereja 3</option>
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
        <button class="submit" type="submit">Save & Continue</button>
      </form>
      <a class="back" href=""> &lt; Back </a>
    </FloatingBox>
    <Footer />
  </div>
</template>

<style>
.asalDaerah {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 0.5rem;
  /* text-align: left; */

  color: #4d76b7;
  display: flex;
  justify-content: flex-start;
  /* margin-right: 25rem; */
}

.formfield {
  font-family: Roboto;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  color: #5b5b5b;
  /* display: flex; */
}

.back {
  font-size: 0.75rem;
  font-weight: bold;
  color: #4d76b7;
}

.back:hover {
  text-decoration: underline;
}

.submit {
  color: #4d76b7;
  font-size: 0.75rem;
  border: 3px solid #4d76b7;
  background: white;
}
</style>

<script setup lang="ts">
import Header from '../components/UI/Header.vue';
import Footer from '../components/UI/Footer.vue';
import FloatingBox from '../components/UI/FloatingBox.vue';
</script>
