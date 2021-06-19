<template>
  <FormContainer>
    <FormContainerLeft>
      <form>
        <label class="text-left block mt-6 mb-2" for="prov">PROVINSI</label>
        <select id="prov" name="prov">
          <option value="" disabled selected hidden></option>
          <option value="provinsi1">Provinsi 1</option>
          <option value="provinsi2">Provinsi 2</option>
          <option value="provinsi3">Provinsi 3</option>
        </select>
        <label class="text-left block mt-6 mb-2" for="kota">KOTA</label>
        <select id="kota" name="kota">
          <option value="" disabled selected hidden></option>
          <option value="kota1">Kota 1</option>
          <option value="kota2">Kota 2</option>
          <option value="kota3">Kota 3</option>
        </select>
        <label class="text-left block mt-6 mb-2" for="sekolah">SEKOLAH</label>
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
        <label class="text-left block mt-6 mb-2" for="gereja">GEREJA</label>
        <select id="gereja" name="gereja">
          <option value="" disabled selected hidden></option>
          <option value="gereja1">Gereja 1</option>
          <option value="gereja2">Gereja 2</option>
          <option value="gereja3">Gereja 3</option>
        </select>
      </form>
    </FormContainerRight>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from './FormContainer.vue';
import FormContainerLeft from './FormContainerLeft.vue';
import FormContainerRight from './FormContainerRight.vue';
</script>

<style>
select {
  width: 100%;
  height: 1.6rem;
}
</style>
