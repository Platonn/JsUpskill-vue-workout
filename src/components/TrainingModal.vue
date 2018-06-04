<template>
  <!-- modals => -->
  <div class="modal fade bs-example-modal-sm in" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content" style="padding: 10px; overflow: scroll;">
        <h1>Start</h1>
        <div class="col-xs-8 col-xs-offset-2">
          <div class="panel panel-primary">
            <div class="panel-heading">{{training.name}}</div>
            <div class="panel-body">
              <p>{{training.description}}</p>
            </div>
            <ul class="list-group" >
              <li class="list-group-item" v-for="exercise in training.exercises">
                {{exercise.name}}
              </li>
            </ul>
            <button class="btn btn-primary center-block" style="margin-top: 20px; margin-bottom: 20px;">Edytuj</button>
          </div>

          <form class="form-inline col-xs-12" style="margin-bottom: 30px;">
            <h3>Cele</h3>
            <div class="form-group">
              <label class="control-label">Czas</label>
              <input
                class="form-control"
                type="text"
                placeholder="Podaj w minutach"
                v-model="time">
            </div>
            <p>{{time}}</p>
            <div class="form-group">
              <label class="control-label">Ciężar</label>
              <input
                class="form-control"
                type="number"
                placeholder="Podaj ilość w kg"
                v-model="weight">
              <p v-bind:style="{ fontSize: weight + 'px' }">{{weight}}</p>
            </div>
          </form>
        </div>
        <div class="col-xs-12">
          <button class="btn btn-primary center-block"
          @click="startTraining">Rozpocznij trening</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main' // should use curly brackets, because const was exported

  export default {
  	props: {
  		'training': Object // vue will validate type of property
    },
    data(){
  		return {
  			time: '',
        weight: 10
      }
    },
    methods: {
    	startTraining() {
    		eventBus.$emit('trainingWasStarted', {
          training: this.training,
          time: this.time,
          weight: this.weight
        });
    		eventBus.closeTrainingModal();
      }
    }
  }
</script>
