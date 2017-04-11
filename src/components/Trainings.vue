<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <SingleTraining v-for="training in trainings"
      :training="training"
      @trainingWasChosen="chosenTraining = $event"
    ></SingleTraining>
  </div>
</template>

<script>
  import SingleTraining from './SingleTraining.vue'
  import mock from '../mock.js'

  export default {
    data () {
      return {
        trainings: mock,
        chosenTraining: {} 
      }
    },
    components: {
      SingleTraining
    }
  }
</script>