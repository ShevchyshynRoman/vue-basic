<template>
 <form @submit.prevent>
   <div class='form-control'>
     <label>
       Title:
       <input type='text' v-model='title'>
     </label>
   </div>
   <div class='form-control'>
     <label>
       Description:
       <textarea rows='3' v-model='description'></textarea>
     </label>
   </div>
   <div class='form-control'>
     <label>
       Link:
       <input
         placeholder="https://example.com"
         pattern="https://.*" size="30"
         type='url'
         v-model='link'
       >
     </label>
   </div>
   <BaseButton type='submit' @click="submitData">
     Add Resource
   </BaseButton>
 </form>


  <BaseDialog
    v-if="isValidForm"
    title='Invalid input'
    @closeModal="confirmError"
  >
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>Please check all inputs ana make sure you enter at least a few characters into each input field.</p>
    </template>
    <template #actions>
      <BaseButton @click="confirmError">
        Okay
      </BaseButton>
    </template>
  </BaseDialog>
</template>

<script>
import BaseDialog from '@/components/UI/BaseDialog';
import BaseButton from '@/components/UI/BaseButton';
export default {
  components: { BaseButton, BaseDialog },
  inject: ['addNewResource'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      isValidForm: false
    }
  },

  methods: {
    submitData() {
      if (
         this.title === ''
        || this.description === ''
        || this.link === ''
      ) {
        this.isValidForm = true;
        return;
      }

      this.addNewResource(
        this.title, this.description, this.link
      )
      this.title = '';
      this.description = '';
      this.link = '';
    },

    confirmError() {
      this.isValidForm = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
