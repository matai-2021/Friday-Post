import request from 'superagent'

export function getMessages () {
  return request.get('/api/v1/cards/')
    .then(res => res.body)
}
