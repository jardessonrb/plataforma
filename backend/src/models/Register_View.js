const BaseModel = require('./BaseModel')
const { Model } = require('objection');
const knex = require('../database/knex')

Model.knex(knex)

class Register_View extends BaseModel {
  constructor() {
    super();
  }

  static get tableName() {
    return 'Register_View';
  }

  static get relationMappings() {
      const User = require('./User');
      return {
        Course: {
            relation: Model.HasOneRelation, //relação muito para muitos
            modelClass: User,
            join: {
              from: 'Register_View.id_register_view',
              to: 'User.id_user'
            }
        }

      }
  }
}
module.exports = Register_View