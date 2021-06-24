exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        { id: 1, name: 'James', date: '2021-06-19', message: 'You are cool!!', photoUrl: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2016/08/blog839.jpg', quote: 'to infinity and beyond!' },
        { id: 2, name: 'Eleanor', date: '2021-06-13', message: 'Great memories with You!', photoUrl: 'https://i.pinimg.com/564x/82/43/f4/8243f47cfd5aa438a36841a01580fec9.jpg', quote: 'i wouldnt want to join any club that would take me as a member' },
        { id: 3, name: 'West', date: '2021-06-21', message: 'Miss you mate!', photoUrl: 'https://miro.medium.com/max/3840/1*pxT9yXCqMUPgjWcO_2Fqtw.jpeg', quote: 'Carpe Diem' }
      ])
    })
}
