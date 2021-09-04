<template>
  <button
    class="grid grid-cols-4 justify-items-center items-center text-blue-primary hover:text-white text-base font-bold font-roboto bg-white hover:bg-blue-primary box-border border-[3px] border-blue-primary h-11 w-64 rounded-md"
    type="button"
    @click="onClickHandler"
  >
    <p class="col-start-2 col-span-2">Submit</p>
    <div>
      <fa :icon="['fas', 'check']" />
    </div>
  </button>
</template>

<script setup lang="ts">
import submitForm from '../../../lib/form/submitForm';
import { computed } from 'vue';
import router from '../../../router';

const name = computed(() => sessionStorage.getItem('form.fullname') ?? '').value;
const nickname = computed(() => sessionStorage.getItem('form.nickname') ?? '').value;
const gender = computed(() => sessionStorage.getItem('form.gender') ?? '').value;
const birthDate = computed(() => sessionStorage.getItem('form.birthDate') ?? '').value;
const phone = computed(() => sessionStorage.getItem('form.phoneNumber') ?? '').value;
const parentPhone = computed(() => sessionStorage.getItem('form.emergencyPhoneNumber') ?? '').value;
const parentRelationship = computed(() => sessionStorage.getItem('form.relation') ?? '').value;
const line = computed(() => sessionStorage.getItem('form.idLine') ?? '').value;
const email = computed(() => sessionStorage.getItem('form.email') ?? '').value;
const nim = computed(() => sessionStorage.getItem('form.studentId') ?? '').value;
const majorId = computed(() => sessionStorage.getItem('form.department') ?? '').value;
const discipleshipId = computed(() => sessionStorage.getItem('form.pktb') ?? '').value;
const originProvince = computed(() => sessionStorage.getItem('form.province') ?? '').value;
const originCity = computed(() => sessionStorage.getItem('form.city') ?? '').value;
const originSchool = computed(() => sessionStorage.getItem('form.school') ?? '').value;
const originChurch = computed(() => sessionStorage.getItem('form.church') ?? '').value;

const onClickHandler = async () => {
  const data = {
    nim,
    name,
    nickname,
    majorId: parseInt(majorId),
    gender,
    birthDate,
    line,
    phone,
    email,
    originProvince,
    originCity,
    originSchool,
    originChurch,
    parentPhone,
    parentRelationship,
    discipleshipId: parseInt(discipleshipId),
  };
  try {
    await submitForm(data);
  } catch (e) {
    alert('NIM yang Anda masukkan sudah terdaftar.');
  }
  router.push({ path: '/thankyou' });
  sessionStorage.clear();
};
</script>
