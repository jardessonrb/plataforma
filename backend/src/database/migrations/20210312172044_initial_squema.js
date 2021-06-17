

exports.up = function(knex) {
  return knex.schema
    .createTable('User', t => {
      t.increments('id_user').primary()
      t.date('birthdate_user')
      t.string('name_user')
      t.string('email_user')
      t.string('password_user')
      t.string('path_image_user')
      t.timestamps(true, true)
    })
    .createTable('Course', t => {
      t.increments('id_course').primary()
      t.string('name_course')
      t.string('Description_course')
      t.integer('value_course')
      t.date('data_create_course')
      t.timestamps(true, true)
    })
    .createTable('Module_Course', t => {
      t.increments('id_module').primary()
      t.string('name_module')
      t.integer('order_module')
      t.timestamps(true, true)
    })
    .createTable('Video_Class', t => {
      t.increments('id_video_class').primary()
      t.string('name_video_class')
      t.string('path_video_class')
      t.string('path_image_video')
      t.timestamps(true, true)
    })
    .createTable('Register_View', t => {
      t.increments('id_register_video').primary()
      t.boolean('was_watched')
      t.timestamps(true, true)
    })
    .createTable('Company', t => {
      t.increments('id_company').primary()
      t.string('corporate_name_company')
      t.string('name_company')
      t.string('email_company')
      t.string('password_company')
      t.string('CNPJ_company')
      t.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('User')
    .dropTableIfExists('Course')
    .dropTableIfExists('Module_Course')
    .dropTableIfExists('Video_Class')
    .dropTableIfExists('Register_View')
    .dropTableIfExists('Company')
};
