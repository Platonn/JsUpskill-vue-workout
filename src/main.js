import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    closeTrainingModal (){
      this.$emit('closeModalFromEB');
    }
  }
});

Vue.mixin({
  created() {
    console.log('each created');
  }
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
});
