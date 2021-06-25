import request from 'superagent'

export function getMessagesAPI () {
  return request.get('/')
    .then(res => res.body)
}

export function addMessageAPI (newMessage) {
  return getImage(newMessage)
}

// const { name, message, photoUrl } = newMessage

// const photoLink = getImage(photoUrl)

function getImage (photo) {
  const { name, message, photoUrl } = photo
  if (photoUrl === 'cat') {
    console.log('you picked dog')
    return request('https://thatcopy.pw/catapi/rest/')
      .set('accept', 'application/json')
      .then(res => {
        console.log('dog api: ', res.body)
        return work(name, message, res.body.url)
      })
      .catch(err => {
        console.error(err)
      })
  } else {
    console.log('you are not a dog')
  }
}
// getImage(photoUrl)
// .then(imgUrl => {
//   return imgUrl
// })

function work (name, message, photoLink) {
  return request.post('/')
    .send({ name, message, photoUrl: photoLink })
    .then(() => null)
}
