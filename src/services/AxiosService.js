import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/',
  timeout: 3000
})

export const roverApi = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=YbFHyWZxXxHOIbH3OtlNtNyPYWfjdnd6BOmjP0BV',
  timeout: 3000
})
