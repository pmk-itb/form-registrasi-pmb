<template>
  <div id="form-page" class="flex flex-col items-center space-y-10 md:space-y-20">
    <Header />
    <FloatingBox2>
      <h2 class="asalDaerah">Asal Daerah</h2>
      <div class="container">
        <div class="container-left">
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
        </div>
        <div class="container-right">
          <label for="gereja"> GEREJA </label>
          <select id="gereja" name="gereja">
            <option value="" disabled selected hidden></option>
            <option value="gereja1">Gereja 1</option>
            <option value="gereja2">Gereja 2</option>
            <option value="gereja3">Gereja 3</option>
          </select>
        </div>
      </div>
      <div class="container2">
        <div class="container-left">
          <a class="back" href=""> &lt; Back </a>
        </div>
        <div class="container-right">
          <button class="submit" type="submit">Save & Continue</button>
        </div>
      </div>
    </FloatingBox2>
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
  color: #4d76b7;
}

.back {
  font-size: 0.75rem;
  font-weight: bold;
  color: #4d76b7;
}

.back:hover {
  font-size: 0.77rem;
  text-decoration: underline;
}

.submit {
  color: #4d76b7;
  font-size: 0.75rem;
  font-weight: bold;
  border: 0.188rem solid #4d76b7;
  background: white;
  width: 8rem;
  height: 1.5rem;
}

.submit:hover {
  border: 0.2rem solid #91b1e2;
}

.container {
  height: 200px;
  font-family: Roboto;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  color: #5b5b5b;
  text-transform: uppercase;
}

.container-left {
  height: 100%;
  width: 66%;
  float: left;
}

.container-right {
  height: 100%;
  width: 34%;
  float: right;
}

.container2 {
  height: 2rem;
  width: 100%;
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
</script>
