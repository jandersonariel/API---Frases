import axios from 'axios'


  const base_URL = 'https://api.kanye.rest'

  export const phrasesApi = async () => {
   const pathFunct = await axios.get(base_URL).then(response => response.data.quote)
   return pathFunct
}