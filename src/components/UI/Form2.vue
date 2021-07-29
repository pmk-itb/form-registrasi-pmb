<template>
  <FormContainer>
    <FormContainerLeft>
      <form>
        <label class="text-left block mt-6 mb-2" for="prov"> PROVINSI </label>
        <input type="search" list="prov" />
        <datalist id="prov">
          <option value="Sumatera Utara" />
          <option value="Kalimantan Barat" />
          <option value="Jawa Tengah" />
        </datalist>
        <label class="text-left block mt-6 mb-2" for="kota"> KOTA </label>
        <input type="search" list="kota" />
        <datalist id="kota">
          <option value="Medan" />
          <option value="Bandung" />
          <option value="Surabaya" />
        </datalist>
        <label class="text-left block mt-6 mb-2" for="sekolah"> SEKOLAH </label>
        <input type="search" list="sekolah" />
        <datalist id="sekolah">
          <option value="SMA Negeri 5 Surabaya" />
          <option value="SMA Unggul Del" />
          <option value="SMAN 8 Jakarta" />
        </datalist>
      </form>
    </FormContainerLeft>
    <FormContainerRight>
      <form>
        <label class="text-left block mt-6 mb-2" for="sekolah"> GEREJA </label>
        <input type="search" list="gereja" />
        <datalist id="gereja">
          <option value="HKBP Riau Bandung" />
          <option value="GKI Maulana Yusuf Bandung" />
          <option value="GII Hok Im Tong Bandung" />
        </datalist>
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
input[type='search'],
datalist {
  width: 95%;
  height: 1.6rem;
  padding-left: 0.5rem;
}

select {
  width: 100%;
  height: 1.6rem;
}
</style>
