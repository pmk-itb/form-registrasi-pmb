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
        <label class="text-left block mt-6 mb-2" for="school"> SEKOLAH </label>
        <input v-model="selectedSchool" type="search" list="school" required @change="updateSchool" />
        <datalist id="school">
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
import nprogress from 'nprogress';

const provinceData = ref<RegionalDataResponse>();
const citiesData = ref<RegionalDataResponse>();
const schoolsData = ref<SchoolResponse>();
const churchesData = ref<ChurchResponse>();

const selectedProvince = ref(sessionStorage.getItem('form.provinceId') ?? '');
const selectedCity = ref(sessionStorage.getItem('form.cityId') ?? '');
const selectedSchool = ref(sessionStorage.getItem('form.school') ?? '');
const selectedChurch = ref(sessionStorage.getItem('form.church') ?? '');

const getText = (e: Event) => {
  const el = e.target as HTMLSelectElement;
  return el.options[el.selectedIndex].text;
};

const populateProvince = async (): Promise<void> => {
  provinceData.value = await getListOfProvinces();
};

const populateCity = async (e?: Event): Promise<void> => {
  if (e) {
    sessionStorage.setItem('form.province', getText(e));
    sessionStorage.setItem('form.provinceId', (e.target as HTMLSelectElement).value);
  }
  nprogress.start();
  citiesData.value = await getListOfCities(selectedProvince.value);
  nprogress.done();
};

const populateSchoolsAndChurches = async (e?: Event): Promise<void> => {
  if (e) {
    sessionStorage.setItem('form.city', getText(e));
    sessionStorage.setItem('form.cityId', (e.target as HTMLSelectElement).value);
  }
  nprogress.start();
  schoolsData.value = await getListOfSchools(selectedCity.value);
  churchesData.value = await getListOfChurches(selectedCity.value);
  nprogress.done();
};

const updateChurch = async (e: Event) => {
  sessionStorage.setItem('form.church', (e.target as HTMLInputElement).value);
};

const updateSchool = async (e: Event) => {
  sessionStorage.setItem('form.school', (e.target as HTMLInputElement).value);
};

nprogress.start();
populateProvince();
populateCity();
populateSchoolsAndChurches();
nprogress.done();
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
