import { AppState } from '../AppState'
import { nasaApi, roverApi } from './AxiosService'

class NasaService {
  constructor() {
    this.getRover()
  }

  async getPictures(query) {
    const res = await nasaApi.get('apod?api_key=YbFHyWZxXxHOIbH3OtlNtNyPYWfjdnd6BOmjP0BV&date=' + query)
    AppState.pictures = res.data
    console.log(res.data)
  }

  async getRover() {
    const res = await roverApi.get('')
    console.log(res.data)
    AppState.rovers = res.data
  }
}

export const nasaService = new NasaService()
