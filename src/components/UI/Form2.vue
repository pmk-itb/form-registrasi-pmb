<template>
  <FormContainer>
    <form action="/Form3" method="GET">
      <FormContainerLeft>
        <label class="text-left block mt-6 mb-2" for="prov"> PROVINSI </label>
        <input v-model="selectedProvince" type="search" list="prov" required @change="populateCity" />
        <datalist id="prov">
          <option v-for="province in provinceData?.data" :key="province.id" :value="province.id">
            {{ province.nama }}
          </option>
        </datalist>
        <label class="text-left block mt-6 mb-2" for="kota"> KOTA </label>
        <input v-model="selectedCity" type="search" list="kota" required @change="populateSchoolsAndChurches" />
        <datalist id="kota">
          <option v-for="city in citiesData?.data" :key="city.id" :value="city.id">
            {{ city.nama }}
          </option>
        </datalist>
        <label class="text-left block mt-6 mb-2" for="sekolah"> SEKOLAH </label>
        <input v-model="selectedSchool" type="search" list="sekolah" required />
        <datalist id="sekolah">
          <option v-for="school in schoolsData?.data" :key="school.id" :value="school.id">
            {{ school.sekolah }}
          </option>
        </datalist>
      </FormContainerLeft>
      <FormContainerRight>
        <label class="text-left block mt-6 mb-2" for="sekolah"> GEREJA </label>
        <input v-model="selectedChurch" type="search" list="gereja" required />
        <datalist id="gereja">
          <option v-for="(church, index) in churchesData?.data" :key="index" :value="church">
            {{ church }}
          </option>
        </datalist>
      </FormContainerRight>
    </form>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from './FormContainer.vue';
import FormContainerLeft from './FormContainerLeft.vue';
import FormContainerRight from './FormContainerRight.vue';
import { getListOfProvinces, getListOfCities } from '../../lib/form/regionalData';
import { getListOfSchools } from '../../lib/form/school';
import { getListOfChurches } from '../../lib/form/church';
import { ref } from 'vue';
import type { RegionalDataResponse } from '../../lib/form/types/RegionalResponse';
import type { SchoolResponse } from '../../lib/form/types/SchoolResponse';
import type { ChurchResponse } from '../../lib/form/types/ChurchResponse';

const provinceData = ref<RegionalDataResponse>();
const citiesData = ref<RegionalDataResponse>();
const schoolsData = ref<SchoolResponse>();
const churchesData = ref<ChurchResponse>();

const selectedProvince = ref();
const selectedCity = ref();
const selectedSchool = ref();
const selectedChurch = ref();

const populateProvince = async (): Promise<void> => {
  provinceData.value = await getListOfProvinces();
};

const populateCity = async (): Promise<void> => {
  citiesData.value = await getListOfCities(selectedProvince.value);
};

const populateSchoolsAndChurches = async (): Promise<void> => {
  schoolsData.value = await getListOfSchools(selectedCity.value);
  churchesData.value = await getListOfChurches(selectedCity.value);
};

populateProvince();
</script>

<style>
input[type='search'],
datalist {
  width: 100%;
  height: 1.6rem;
  padding: 0 0.5rem;
}

select {
  width: 100%;
  height: 1.6rem;
  margin-top: 12rem;
}
</style>
