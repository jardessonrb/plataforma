const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Video_Class extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'Video_Class';
  }

  static get relationMappings() {
      const Register_View = require('./Register_View')
      return {
        Register_View: {
            relation: Model.HasOneRelation, //relação muito para muitos
            modelClass: Register_View,
            join: {
              from: 'Video_Class.id_video_class',
              to: 'Register_View.id_register_view'
            }
        }

      }
  }
}
module.exports = Video_Class