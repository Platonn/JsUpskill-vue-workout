<template>
  <div class="wrapper">
      <div class="containter">
        <trainings></trainings>
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
    trainings: Trainings
   }
 }  
</script>

<style>
  .wrapper {
    background-color: #ffd700;
    overflow: hidden;
  }
</style>