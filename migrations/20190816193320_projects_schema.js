exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      /*
    tbl.increments("id");
    tbl
      .string("VIN", 17)
      .unique()
      .notNullable();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.int("Mileage").notNullable();
    tbl.string("TransType");
    tbl.string("TitleStatus");
    */
    })
    .createTable("tasks", tbl => {})
    .createTable("resources", tbl => {})
    .createTable("projects_resources", tbl => {});
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
