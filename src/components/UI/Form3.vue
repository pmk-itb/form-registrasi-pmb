<template>
  <FormContainer>
    <form id="form" action="/" method="GET">
      <FormContainerLeft>
        <div id="v-model-basic" class="form-control mt-6 mb-2" :class="{ error: hasError.pktb }">
          <label class="text-left block form-control" for="pktb"> NAMA PKTB </label>
          <select id="pktb" v-model="pktb" required name="pktb" @change="updatePKTB">
            <option v-for="mentor in mentors?.data" :key="mentor.id" class="font-roboto" :value="mentor.id">
              {{ mentor.leaderName }}
            </option>
          </select>
          <i class="fa-check-circle"><fa :icon="['fas', 'check-circle']" /></i>
          <i class="fa-exclamation-circle"><fa :icon="['fas', 'exclamation-circle']" /></i>
          <small class="absolute text-left block">Only alphabets are accepted for name</small>
        </div>
      </FormContainerLeft>
      <div class="button-container2">
        <div style="width: 50%; padding-top: 3rem">
          <a class="text-sm font-bold text-blue-primary hover:underline" @click="onClickHandlerBack"> &lt; Back </a>
        </div>
        <div style="display: flex; flex-direction: column; width: 50%">
          <input class="submit" type="submit" value="Submit" />
        </div>
      </div>
    </form>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from './FormContainer.vue';
import FormContainerLeft from './FormContainerLeft.vue';
import FormContainerRight from './FormContainerRight.vue';
import { computed, ref } from 'vue';
import { alphabetOnlyValidation } from '../../lib/validation/inputValidation';
import type { formInputs } from '../../types/formInputs';
import type { MentorDataResponse } from '../../lib/form/types/MentorResponse';
import { getListOfMentors } from '../../lib/form/mentor';
import nprogress from 'nprogress';
import { useStore } from 'vuex';

const store = useStore();

const onClickHandlerBack = () => {
  store.commit('pages/PREV_PAGE');
};

const mentors = ref<MentorDataResponse>();

const pktb = computed(() => sessionStorage.getItem('form.pktb') ?? '');

const hasError = ref<formInputs>({
  pktb: false,
});

const populateMentors = async (): Promise<void> => {
  mentors.value = await getListOfMentors();
};

const updatePKTB = (e: Event) => {
  sessionStorage.setItem('form.pktb', (e.target as HTMLInputElement).value);
};

nprogress.start();
populateMentors();
nprogress.done();
</script>

<style>
input[type='text'] {
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

.form-control small {
  visibility: hidden;
  position: absolute;
  bottom: -1.25rem;
  left: 0;
}

.form-control.error small {
  color: #e74c3c;
  visibility: visible;
  position: absolute;
  top: 4rem;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  height: auto;
  width: 100%;
}

.submit {
  font-family: Roboto;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border: 0.188rem solid #4d76b7;
  background: #4d76b7;
  width: 8rem;
  height: 2rem;
  margin-top: 3rem;
  align-self: flex-end;
}
</style>
