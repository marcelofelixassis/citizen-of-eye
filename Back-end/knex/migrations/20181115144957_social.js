exports.up = function(knex, Promise) {
    return knex.schema.createTable("social", (t) => {
        t.increments("id_social");
        t.integer("id");
        t.string("nome");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("social");
};
