
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (tbl) => {
    tbl.increments();

    tbl
      .string('studentName')
      .notNullable()
      .unique('studentName');

    tbl
      .integer('cohort_id')
      .unsigned();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};
