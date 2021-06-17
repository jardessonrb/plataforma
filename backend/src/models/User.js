const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class User extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'User';
  }

  static get relationMappings() {
      const Course = require('./Course')
      return {
        Course: {
            relation: Model.ManyToManyRelation, //relação muito para muitos
            modelClass: Course,
            join: {
              from: 'User.id',
              to: 'Course.id'
            }
        }

      }
  }
}
module.exports = User