const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Course extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'Course';
  }

  static get relationMappings() {
      const User = require('./User')
      const Module_Course = require('./Module_Course')
      return {
          User: {
            relation: Model.ManyToManyRelation,
            modelClass: User,
            join: {
              from: 'Course.id',
              to: 'User.id'
            }
          },

          Module_Course: {
            relation: Model.HasManyRelation,
            modelClass: Module_Course,
            join: {
              from: 'Course.id',
              to: 'Module_Course.id_module'
            }
          }
      }
  }
}
module.exports = Course