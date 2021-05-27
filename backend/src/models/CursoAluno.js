const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class CursoAluno extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'cursos_alunos';
  }

  static get relationMappings() {
    const Aluno = require('./Aluno')
    const Curso = require('./Curso')
    return {
        alunos: {
            relation: Model.BelongsToOneRelation,
            modelClass: Aluno,
            join: {
                from: 'cursos_alunos.aluno_id',
                to: 'alunos.id'
            }
        },

        cursos: {
          relation: Model.BelongsToOneRelation,
          modelClass: Curso,
          join: {
              from: 'cursos_alunos.curso_id',
              to: 'cursos.id'
          }
        }
    }
  }
}
module.exports = CursoAluno