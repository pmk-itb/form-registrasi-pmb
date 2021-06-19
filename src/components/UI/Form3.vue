<template>
  <FormContainer>
    <FormContainerLeft>
      <form>
        <label class="text-left block mt-6 mb-2" for="pktb">NAMA PKTB</label>
        <input id="pktb" type="text" name="pktb" />
      </form>
    </FormContainerLeft>
    <FormContainerRight>
      <form>
        <label class="text-left block mt-6 mb-2" for="ktb">NAMA KTB</label>
        <input id="ktb" type="text" name="ktb" />
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
input[type='text'] {
  width: 100%;
  height: 1.6rem;
}
</style>
