const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Module_Course extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'Module_Course';
  }

  static get relationMappings() {
      const Video_Class = require('./Video_Class')
      return {
        Course: {
            relation: Model.HasManyRelation, //relação muito para muitos
            modelClass: Video_Class,
            join: {
              from: 'Module_Course.id_module',
              to: 'Video_Class.id_video_class'
            }
        }

      }
  }
}
module.exports = Module_Course