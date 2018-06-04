<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <SingleTraining
      v-for="training in trainings"
      v-bind:training="training"
      @trainingWasChosen="chooseTraining($event)"
    >
      <!-- $event is value of emitted event-->

    </SingleTraining>
    <transition name="showModal" type="animation"
    :enter="showEnter">
      <!--type: animation -> CSS keyframes-->
      <TrainingModal
        v-if="showModal"
        :training="chosenTraining"></TrainingModal>
    </transition>
    {{chosenTraining}}
  </div>
</template>

<script>
  import SingleTraining from './SingleTraining.vue'
  import TrainingModal from './TrainingModal.vue'
  import mock from '../mock'
  import {eventBus} from '../main'

  export default {
    data() {
      return {
        trainings: mock,
        chosenTraining: {},
        showModal: false
      }
    },
    components: {
      SingleTraining, // in ES6 we don't have to double property key and value if they are the same
      TrainingModal
    },
    methods: {
      chooseTraining (data) {
        this.chosenTraining = data;
        this.showModal = true;
      },
      showEnter() {
      	console.log('showEnter!')
      }
    },
    created() {
      eventBus.$on('closeModalFromEB', () => {
        this.showModal = false;
      })
    }
  }
</script>

<style>
  /* animation name is prefix showEnter; but should beised with v-if */
  .showModal-enter { /* first frame */
    opacity: 0;
  }

  .showModal-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(40px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
