<template>
  <div class="picture-results border border-danger" v-if="state.rovers.photos">
    <h3> Rover Search Results:  {{state.rovers.photos.length}}</h3>
    <ol>
      <li v-for="rover in state.rovers.photos" :key="rover.id">
        <!-- <h4>{{state.rovers.camera.full_name}}</h4> -->
        <!-- NOTE props are passed through element attributes, here bound due to the value being an object -->
       <!-- we can put rover from the v-for in {{rover}} to "log" results -->
       <!-- {{rover}} -->
        <img :src="rover.img_src" alt="">
        <p>{{rover.rover.name}}</p>
      </li>
    </ol>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'RoverResults',
  setup() {
    const state = reactive({
      // NOTE computed watches for changes on any of its returned values
      rovers: computed(() => AppState.rovers)
    })
    return {
      state
    }
  },
  components: {

  }
}
</script>
