<template>
  <div class="app">
    <header class="container-fluid bg-primary text-light">
      <div class="row text-center">
        <div class="col text-center">
          <h1> Welcome to <img alt="Vue logo" src="./assets/logo.png">ue-Nasa</h1>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
        <div class="col">
          <!-- NOTE Search gets defined with prevent to stop reload -->
          <form @submit.prevent="search">
            <!-- NOTE We bind to the state with v-model from our input -->
            <input class="mx-1" type="text" placeholder="Date yyyy-mm-dd" v-model="state.query">
            <button type="submit" class="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <PictureResults />
        </div>
        <div class="col-6">
          <RoverPhoto />
        </div>
      </div>
    </main>
    <footer class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <p class="m-3"> Made with ♥ by codeworks</p>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from './AppState'
import { nasaService } from './services/NasaService'
import PictureResults from './components/PictureResults'
import RoverPhoto from './components/RoverPhoto'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      query: '',
      pictures: computed(() => AppState.pictures)
    })
    return {
      state,
      async search() {
        await nasaService.getPictures(state.query)
        state.query = ''
      }
    }
  },
  components: {
    PictureResults,
    RoverPhoto
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app {
 display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}
h1 img {
  height: 1em;
}
</style>
