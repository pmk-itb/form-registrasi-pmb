<template>
  <FormContainer>
    <FormContainerLeft>
      <form id="form" action="/" method="GET">
        <div id="v-model-basic" class="form-control" :class="{ success: isActive, error: hasError }">
          <label for="fullname"> NAMA LENGKAP </label>
          <input
            id="fullname"
            v-model="name"
            type="text"
            name="fullname"
            style="text-transform: capitalize"
            @change="checkName"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute tex3t-left block">{{ message }}</small>
        </div>

        <div id="v-model-basic" class="form-control">
          <label for="nickname"> NAMA PANGGILAN </label>
          <input id="nickname" v-model="nickname" type="text" name="nickname" style="text-transform: capitalize" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div id="v-model-radiobutton" class="form-control">
          <p>JENIS KELAMIN</p>
          <label class="radio-inline">
            <input v-model="gender" class="mr-2 my-2" type="radio" name="gender" />Laki-laki
          </label>
          <label class="radio-inline">
            <input v-model="gender" class="mr-2 ml-10 my-2" type="radio" name="gender" />Perempuan
          </label>
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div class="form-control">
          <label for="bdate"> TANGGAL LAHIR </label>
          <input id="bdate" v-model="birthDate" type="date" name="bdate" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div id="v-model-basic" class="form-control">
          <label for="pnumber"> NOMOR HANDPHONE PRIBADI </label>
          <input id="pnumber" v-model="phoneNumber" type="number" name="pnumber" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div class="form-control">
          <label for="enumber"> NOMOR HANDPHONE DARURAT </label>
          <input id="enumber" v-model="emergencyPhoneNumber" type="number" name="enumber" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div class="form-control">
          <label for="idline"> ID LINE </label>
          <input id="idline" v-model="idLine" type="text" name="idline" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div class="form-control">
          <label for="email"> EMAIL </label>
          <input id="email" v-model="email" type="text" name="email" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>
      </form>
    </FormContainerLeft>
    <FormContainerRight>
      <form>
        <div class="form-control">
          <label for="nim"> NIM </label>
          <input id="nim" v-model="studentId" type="number" name="nim" />
          <i1 class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i1>
          <i1 class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i1>
          <small>Error Message</small>
        </div>

        <div class="form-control">
          <label for="fakultas"> FAKULTAS </label>
          <select id="fakultas" v-model="department" name="fakultas">
            <option class="font-roboto" value="" disabled selected hidden></option>
            <option class="font-roboto" value="stei">STEI</option>
            <option value="fti">FTI</option>
            <option value="ftsl">FTSL</option>
          </select>
          <i1 class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i1>
          <i1 class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i1>
          <small>Error Message</small>
        </div>

        <div class="form-control">
          <label for="kampus"> KAMPUS </label>
          <select id="kampus" v-model="campus" name="kampus" required>
            <option value="" disabled selected hidden></option>
            <option value="ganesha">Ganesha</option>
            <option value="jatinangor">Jatinangor</option>
            <option value="cirebon">Cirebon</option>
          </select>
          <i1 class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i1>
          <i1 class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i1>
          <small>Error Message</small>
        </div>
      </form>
    </FormContainerRight>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from './FormContainer.vue';
import FormContainerLeft from './FormContainerLeft.vue';
import FormContainerRight from './FormContainerRight.vue';
import { ref } from 'vue';

const name = ref('');
const nickname = ref('');
const gender = ref('');
const birthDate = ref('');
const phoneNumber = ref('');
const emergencyPhoneNumber = ref('');
const idLine = ref('');
const email = ref('');
const studentId = ref('');
const department = ref('');
const campus = ref('');

function checkName(): { isActive: boolean; hasError: boolean; message: string } {
  if (name.value.length == 0) {
    // show error
    // add error class
    return {
      isActive: false,
      hasError: true,
      message: 'Nama Lengkap harus diisi',
    };
  } else {
    // add success class
    return {
      isActive: true,
      hasError: false,
      message: '',
    };
  }
}
</script>

<style>
input[type='text'],
input[type='number'],
input[type='date'] {
  width: 100%;
  height: 1.6rem;
  padding: 0 0.5rem;
}

form select {
  width: 100%;
  height: 1.6rem;
}

.form-control {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  display: block;
  position: relative;
}

.form-control input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  margin-top: 0.5rem;
  padding: 0.5rem;
}

.form-control.success input {
  border-color: #2ecc71;
}

.form-control.error input {
  border-color: #e74c3c;
}

.form-control select {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  margin-top: 0.5rem;
}

.form-control.success select {
  border-color: #2ecc71;
}

.form-control.error select {
  border-color: #e74c3c;
}

.form-control i {
  position: absolute;
  top: 1.75rem;
  right: 1rem;
  visibility: hidden;
}
.form-control.success i.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}

.form-control i1 {
  position: absolute;
  top: 1.75rem;
  right: 0rem;
  visibility: hidden;
}

.form-control.success i1.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}

.form-control.error i1.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}

.form-control small {
  visibility: hidden;
  position: absolute;
  bottom: -1.25rem;
  left: 0;
}

.form-control.error small {
  color: #e74c3c;
  visibility: visible;
}
</style>
