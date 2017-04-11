<template>
  <div class="wrapper">
      <div class="containter">
        <appTrainings></appTrainings>
      </div>
  </div>
</template>

<script>
import Trainings from './components/Trainings.vue'

 export default {
   data () {
     return {
      message: "Hello",
      fruits: [
        'Apple',
        'Banana'
      ] 
     } 
   },
   methods: {
     showMsg (msg) {
       console.log(msg)
     }
   },
   components: {
    appTrainings: Trainings
   }
 }  
</script>

<style>
  .wrapper {
    background-color: #ffd700;
    overflow: hidden;
  }
</style>