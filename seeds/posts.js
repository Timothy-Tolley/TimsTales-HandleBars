
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'BANGLADESHI SMILES', blurb: 'A photographic expose of Bangladesh\'s people', img_prim: '/images/blog-images/bangladesh-boys.jpg', img_sec: '',},
        {id: 2, title: 'BOTSWANA SAFARI', blurb: 'Experiencing the African Wilderness', img_prim: '/images/blog-images/botswana-sunset.jpg', img_sec: '',},
        {id: 3, title: 'YEN TU PILGRAMAGE', blurb: 'Buddism and Yen Tu Mountain', img_prim: '/images/blog-images/vietnam-yen-tu.jpg', img_sec: '',},
        {id: 4, title: 'ATHENS SOLO', blurb: 'A budding ancient historian\'s experiences in the birthplace of history', img_prim: '/images/blog-images/tim-greece.jpg', img_sec: '',}
      ]);
    });
};
