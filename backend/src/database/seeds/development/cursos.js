
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cursos').del()
    .then(function () {
      // Inserts seed entries
      return knex('cursos').insert([
        {name: 'Como ficar famoso com a internet'},
        {name: 'JS em 24 horas'},
        {name: 'App de organização laboral'}
      ]);
    });
};
