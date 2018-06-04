<template>
  <div>
    <!--<p v-html="message"></p>-->
    <!--<p v-text="message"></p>-->
    <!--<p>{{message}}</p>-->
    <!--<ul>-->
    <!--<li v-for="(fruit, index) in fruits" :key="index">{{fruit}}</li>-->
    <!--</ul>-->
    <!--<button v-on:click="showMsg">Send</button>-->

    <div class="wrapper">
      <div class="containter">
        <appTrainings></appTrainings>
        <Workout></Workout>
      </div>
    </div>


  </div>
</template>

<script>
  import Trainings from './components/Trainings.vue'
  import Workout from './components/Workout.vue'
  import mixin from './mixin'
  import { eventBus } from './main'
  export default {
    data() { // in components it should be function, but in instances should be
      return {
        message: "<span>Hello</span>",
        fruits: [
          'Apple',
          'Banana'
        ]
      }
    },
    methods: {
      showMsg() {
        console.log(this.message); // this is scoped to component, so data parameters are accessible
      }
    },
    components: {
      appTrainings: Trainings,
      Workout
    },
    mixins: [
      mixin // created from mixin will fire before locally defined created
    ],
    created() {
      eventBus.$on('closeModalFromEB', () => {

      });
    }
  }
</script>

<style scoped>
  .wrapper {
    background-color: #BADA55;
    overflow: hidden;
  }
</style>
