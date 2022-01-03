import { get } from 'axios'
import store from '../store/index'

const protocol = 'https://'
const host = '.api.blizzard.com/'

function listSeasons (region) {
  const resource = 'data/d3/season/'
  const API_URL = `${protocol}${region}${host}${resource}`

  const params = {
    access_token: store.state.oauth.accessToken
  }

  return get(API_URL, { params })
}

export {
  listSeasons
}
