<template>
  <div class="picture-results border border-danger" v-if="state.pictures.length != 0">
    <h3> Search Results:  {{state.pictures.length}}</h3>
    <ol>
      <li>
        <h4>{{state.pictures.title}}</h4>
        <!-- NOTE props are passed through element attributes, here bound due to the value being an object -->
        <img :src="state.pictures.url" alt="">
        <p>{{state.pictures.explanation}}</p>
      </li>
    </ol>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'PictureResults',
  setup() {
    const state = reactive({
      // NOTE computed watches for changes on any of its returned values
      pictures: computed(() => AppState.pictures)
    })
    return {
      state
    }
  },
  components: {

  }
}
</script>
