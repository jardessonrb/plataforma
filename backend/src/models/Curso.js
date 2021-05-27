const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Curso extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'cursos';
  }

  static get relationMappings() {
      const cursoAluno = require('./cursoAluno')
      const Aluno = require('./Aluno')
      return {
          cursos_alunos: {
              relation: Model.HasManyRelation,
              modelClass: cursoAluno,
              join: {
                  from: 'cursos.id',
                  to: 'cursos_alunos.curso_id'
              }
          },
          alunos: {
            relation: Model.ManyToManyRelation,
            modelClass: Aluno,
            join: {
              from: 'cursos.id',
              through: {
                from: 'cursos_alunos.curso_id',
                to: 'cursos_alunos.aluno_id'
              },
              to: 'alunos.id'
            }
          }
      }
  }
}
module.exports = Curso