<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <h1>Training</h1>
    <div class="row" style="margin-bottom: 20px;">
      <div class="col-xs-9">
        <div class="progress">
          <div class="progress-bar" role="progressbar"
               :style="{ width: progress + '%' }"
          >
            <!-- attributes crc, href, styles - we have to bind with v-bind-->
            {{progress}}%
          </div>
        </div>
      </div>
      <div class="col-xs-3 text-center">
        <div class="col-xs-6">
          <label>Minuty</label>
          <div>{{minutes}}</div>
        </div>
        <div class="col-xs-6">
          <label>Sekundy</label>
          <div>{{seconds}}</div>
        </div>
      </div>
    </div>
    <div class="col-xs-8 col-xs-offset-2">
      <div class="panel panel-primary">
        <div class="panel-heading">{{training.name}}</div>
        <div class="list-group">
          <li class="list-group-item" v-for="exercise in training.exercises">{{exercise.name}}</li>
        </div>
      </div>
      <div class="col-xs-12">
        <button class="btn btn-primary center-block">Zakończ</button>
      </div>
    </div>
  </div>

</template>

<script>
  import {eventBus} from '../main'
  export default {
    data (){
      return {
        training: {},
        time: 0,
        weight: 0,
        isStarted: false,
        timer: null,
        seconds: 0,
        minutes: 0,
        currentWeight: 0
      }
    },
    computed: { //computed properties
      progress() {
        if (this.weight !== 0) {
          return this.currentWeight / this.weight * 100;
        }
        else {
          return 0;
        }
      }
    },
    created (){
      eventBus.$on('trainingWasStarted', (data) => {
        this.training = data.training;
        this.time = data.time;
        this.weight = data.weight;
        this.isStarted = true;

        setInterval(() => {
          this.currentWeight++;
        }, 2000);
      });
    },
    watch: {
      // better not use watch. it's better to use computed property - it's value is cached
      isStarted() { // watch function name is the same as watched property
        if (this.isStarted) {
          this.timer = setInterval(() => {
            this.seconds++;

            if (this.seconds === 60) {
              this.minutes++;
              this.seconds = 0;
            }
          }, 10);
        }
        else {
          clearInterval(this.timer)
        }
      }
    }
  }
</script>
