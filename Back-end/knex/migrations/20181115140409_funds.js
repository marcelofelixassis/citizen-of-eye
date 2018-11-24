exports.up = function(knex, Promise) {
    return knex.schema.createTable("funds", (t) => {
        t.increments("id_funds");
        t.integer("idDeputado").references("id").inTable("deputies").index();
        t.date("dataReferencia");
        t.integer("amount");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("funds");
};
