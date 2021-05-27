const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Aluno extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'alunos';
  }

  static get relationMappings() {
      const cursosAlunos = require('./CursoAluno')
      const curso = require('../models/Curso')
      return {
        cursos_alunos: {
              relation: Model.HasManyRelation,
              modelClass: cursosAlunos,
              join: {
                  from: 'alunos.id',
                  to: 'cursos_alunos.aluno_id'
              }
          },


          cursos: {
            relation: Model.ManyToManyRelation, //relação muito para muitos
            modelClass: curso,
            join: {
              from: 'alunos.id',
              through: {
                from: 'cursos_alunos.aluno_id',
                to: 'cursos_alunos.curso_id'
              },
              to: 'cursos.id'
            }
          }

      }
  }
}
module.exports = Aluno