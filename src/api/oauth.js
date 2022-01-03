import { post } from 'axios'

const clientID = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

const getToken = () => {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multiplart/form-data' },
    auth: { username: clientID, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
