<template>
  <FormContainer>
    <form id="form" action="/Form2" method="GET">
      <FormContainerLeft>
        <div id="v-model-basic" class="form-control" :class="{ error: hasError.fullname }">
          <label for="fullname"> NAMA LENGKAP </label>
          <input
            id="fullname"
            v-model="fullname"
            required
            type="text"
            name="fullname"
            style="text-transform: capitalize"
            @change="checkName"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute tex3t-left block">Only alphabets are accepted for name</small>
        </div>

        <div id="v-model-basic" class="form-control" :class="{ error: hasError.nickname }">
          <label for="nickname"> NAMA PANGGILAN </label>
          <input
            id="nickname"
            v-model="nickname"
            required
            type="text"
            name="nickname"
            style="text-transform: capitalize"
            @change="checkNickName"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute tex3t-left block">Only alphabets are accepted for name</small>
        </div>

        <div id="v-model-radiobutton" class="form-control">
          <p>JENIS KELAMIN</p>
          <label class="radio-inline">
            <input v-model="gender" required class="mr-2 my-2" type="radio" name="gender" />Laki-laki
          </label>
          <label class="radio-inline">
            <input v-model="gender" required class="mr-2 ml-10 my-2" type="radio" name="gender" />Perempuan
          </label>
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div class="form-control">
          <label for="bdate"> TANGGAL LAHIR </label>
          <input id="bdate" v-model="birthDate" required type="date" name="bdate" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div id="v-model-basic" class="form-control" :class="{ error: hasError.phoneNumber }">
          <label for="pnumber"> NOMOR HANDPHONE PRIBADI </label>
          <input id="pnumber" v-model="phoneNumber" required type="number" name="pnumber" @change="checkPhoneNumber" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Only numerics are accepted for phone number</small>
        </div>

        <div
          id="v-model-basic"
          style="width: 65%"
          class="form-control-2"
          :class="{ error: hasError.emergencyPhoneNumber }"
        >
          <label for="enumber"> NOMOR HANDPHONE DARURAT </label>
          <input
            id="enumber"
            v-model="emergencyPhoneNumber"
            required
            type="number"
            name="enumber"
            @change="checkEmergencyNumber"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Only numerics are accepted for emergency phone number</small>
        </div>

        <div id="v-model-basic" style="width: 35%" class="form-control-2" :class="{ error: hasError.relation }">
          <label for="relation"> HUBUNGAN </label>
          <input
            id="relation"
            v-model="relation"
            required
            type="text"
            name="relation"
            style="text-transform: capitalize"
            @change="checkRelation"
          />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute tex3t-left block">Only alphabets are accepted for relation</small>
        </div>

        <div class="form-control">
          <label for="idline"> ID LINE </label>
          <input id="idline" v-model="idLine" type="text" name="idline" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>

        <div id="v-model-basic" class="form-control" :class="{ error: hasError.email }">
          <label for="email"> EMAIL </label>
          <input id="email" v-model="email" required type="text" name="email" @change="checkEmail" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Invalid Email</small>
        </div>
      </FormContainerLeft>
      <FormContainerRight>
        <div id="v-model-basic" class="form-control" :class="{ error: hasError.studentId }">
          <label for="nim"> NIM </label>
          <input id="nim" v-model="studentId" required type="number" name="nim" @change="checknim" />
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Only numerics are accepted for NIM</small>
        </div>

        <div class="form-control">
          <label for="fakultas"> FAKULTAS </label>
          <select id="fakultas" v-model="department" required name="fakultas">
            <option class="font-roboto" value="" disabled selected hidden></option>
            <option class="font-roboto" value="stei">STEI</option>
            <option value="fti">FTI</option>
            <option value="ftsl">FTSL</option>
          </select>
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small>Error Message</small>
        </div>
      </FormContainerRight>
    </form>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from './FormContainer.vue';
import FormContainerLeft from './FormContainerLeft.vue';
import FormContainerRight from './FormContainerRight.vue';
import { ref } from 'vue';
import { alphabetOnlyValidation, numericOnlyValidation, emailValidation } from '../../lib/validation/inputValidation';
import type { formInputs } from '../../types/formInputs';
import { useStore } from 'vuex';

const fullname = ref('');
const nickname = ref('');
const gender = ref('');
const birthDate = ref('');
const phoneNumber = ref('');
const emergencyPhoneNumber = ref('');
const relation = ref('');
const idLine = ref('');
const email = ref('');
const studentId = ref('');
const department = ref('');

const hasError = ref<formInputs>({
  fullname: false,
  nickname: false,
  gender: false,
  birthDate: false,
  phoneNumber: false,
  emergencyPhoneNumber: false,
  relation: false,
  idLine: false,
  email: false,
  studentId: false,
  department: false,
});

const checkName = () => {
  const names = fullname.value.trim().split(' ');

  const isNameValid = names.every((name) => alphabetOnlyValidation(name));

  isNameValid ? (hasError.value.fullname = false) : (hasError.value.fullname = true);
};

const checkNickName = () => {
  const nick = nickname.value.trim().split(' ');

  const isNickValid = nick.every((nick) => alphabetOnlyValidation(nick));

  isNickValid ? (hasError.value.nickname = false) : (hasError.value.nickname = true);
};

const checkPhoneNumber = () => {
  const phone = phoneNumber.value.trim().split(' ');

  const isPhoneValid = phone.every((phonenum) => numericOnlyValidation(phonenum));

  isPhoneValid ? (hasError.value.phoneNumber = false) : (hasError.value.phoneNumber = true);
};

const checkEmergencyNumber = () => {
  const emergencyphone = emergencyPhoneNumber.value.trim().split(' ');

  const isEmergencyValid = emergencyphone.every((emerphonenum) => numericOnlyValidation(emerphonenum));

  isEmergencyValid ? (hasError.value.emergencyPhoneNumber = false) : (hasError.value.emergencyPhoneNumber = true);
};

const checkRelation = () => {
  const rels = relation.value.trim().split(' ');

  const isRelationValid = rels.every((rel) => alphabetOnlyValidation(rel));

  isRelationValid ? (hasError.value.relation = false) : (hasError.value.relation = true);
};

const checkEmail = () => {
  const mail = email.value.trim().split(' ');

  const isEmailValid = mail.every((mails) => emailValidation(mails));

  isEmailValid ? (hasError.value.email = false) : (hasError.value.email = true);
};

const checknim = () => {
  const nim = studentId.value.trim().split(' ');

  const isNIMValid = nim.every((id) => numericOnlyValidation(id));

  isNIMValid ? (hasError.value.studentId = false) : (hasError.value.studentId = true);
};
</script>

<style>
input[type='text'],
input[type='number'],
input[type='date'] {
  width: 100%;
  height: 1.6rem;
  padding: 0 0.5rem;
}

.form-control {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  display: block;
  position: relative;
}

.form-control-2 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  position: relative;
}

.form-control input,
.form-control-2 input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  margin-top: 0.5rem;
  padding: 0.5rem;
}

.form-control.success input,
.form-control-2.success input {
  border-color: #2ecc71;
}

.form-control.error input,
.form-control-2.error input {
  border-color: #e74c3c;
}

.form-control select,
.form-control-2 select {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  margin-top: 0.5rem;
}

.form-control.success select,
.form-control-2.success select {
  border-color: #2ecc71;
}

.form-control.error select,
.form-control-2.error select {
  border-color: #e74c3c;
}

.form-control i,
.form-control-2 i {
  position: absolute;
  top: 1.75rem;
  right: 1rem;
  visibility: hidden;
}
.form-control.success i.fa-check-circle,
.form-control-2.success i.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}

.form-control.error i.fa-exclamation-circle,
.form-control-2.error i.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}

.form-control small,
.form-control-2 small {
  visibility: hidden;
  position: absolute;
  bottom: -1.25rem;
  left: 0;
}

.form-control.error small,
.form-control-2.error small {
  color: #e74c3c;
  visibility: visible;
  position: absolute;
  top: 3rem;
}
</style>
