

exports.up = function(knex) {
  return knex.schema
    .createTable('alunos', t => {
      t.increments('id').primary()
      t.date('birthdate')
      t.string('name')
      t.string('Email')
      t.integer('quantidade_cursos')
      //t.string('job_role')
      t.timestamps(true, true)
    })
    .createTable('cursos', t => {
      t.increments('id').primary()
      t.string('name')
      t.string('Descricao')
      t.integer('quantidade_matriculados')
      t.timestamps(true, true)
    })
    .createTable('cursos_alunos', t => {
      t.increments('id')
      t.integer('curso_id')
        .unsigned()
        .references('id')
        .inTable('cursos')
        .onDelete('CASCADE')
        .index()
      t.integer('aluno_id')
        .unsigned()
        .references('id')
        .inTable('alunos')
        .onDelete('CASCADE')
        .index()
      t.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('alunos_cursos')
    .dropTableIfExists('alunos')
    .dropTableIfExists('cursos')
};
