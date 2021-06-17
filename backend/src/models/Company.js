const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Company extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'Company';
  }

  static get relationMappings() {
      const Course = require('./Course')
      return {
        Course: {
            relation: Model.HasManyRelation, //relação muito para muitos
            modelClass: Course,
            join: {
              from: 'Company.id_company',
              to: 'Course.id_course'
            }
        }

      }
  }
}
module.exports = Company