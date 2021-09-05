<template>
  <FormContainer>
    <form action="/Form3" method="GET">
      <FormContainerLeft>
        <div class="form-control">
          <label class="text-left block mt-6 mb-2 form-control" for="prov"> PROVINSI </label>
          <select id="prov" v-model="selectedProvince" required name="prov" @change="populateCity">
            <option v-for="province in provinceData?.data" :key="province.id" :value="province.id">
              {{ province.nama }}
            </option>
          </select>
          <label class="text-left block mt-6 mb-2 form-control" for="kota"> KOTA </label>
          <select id="kota" v-model="selectedCity" required name="kota" @change="populateSchoolsAndChurches">
            <option v-for="city in citiesData?.data" :key="city.id" :value="city.id">
              {{ city.nama }}
            </option>
          </select>
        </div>
        <label class="text-left block mt-6 mb-2" for="sekolah"> SEKOLAH </label>
        <input v-model="selectedSchool" type="search" list="sekolah" required @change="updateSchool" />
        <datalist id="sekolah">
          <option v-for="school in schoolsData?.data" :key="school.id">
            {{ school.sekolah }}
          </option>
        </datalist>
      </FormContainerLeft>
      <FormContainerRight>
        <label class="text-left block mt-6 mb-2" for="gereja"> GEREJA </label>
        <input v-model="selectedChurch" type="search" list="gereja" required @change="updateChurch" />
        <datalist id="gereja">
          <option v-for="(church, index) in churchesData?.data" :key="index">
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
import { computed, ref } from 'vue';
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

const getText = (e: Event) => {
  const el = e.target as HTMLSelectElement;
  return el.options[el.selectedIndex].text;
};

const populateProvince = async (): Promise<void> => {
  provinceData.value = await getListOfProvinces();
};

const populateCity = async (e: Event): Promise<void> => {
  sessionStorage.setItem('form.province', getText(e));
  citiesData.value = await getListOfCities(selectedProvince.value);
};

const populateSchoolsAndChurches = async (e: Event): Promise<void> => {
  sessionStorage.setItem('form.city', getText(e));
  schoolsData.value = await getListOfSchools(selectedCity.value);
  churchesData.value = await getListOfChurches(selectedCity.value);
};

const updateChurch = async (e: Event) => {
  sessionStorage.setItem('form.church', (e.target as HTMLInputElement).value);
};

const updateSchool = async (e: Event) => {
  sessionStorage.setItem('form.school', (e.target as HTMLInputElement).value);
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
