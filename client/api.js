import request from 'superagent'

export function getMessagesAPI () {
  return request.get('/api/v1/cards/')
    .then(res => res.body)
}
