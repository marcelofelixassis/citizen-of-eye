exports.up = function(knex, Promise) {
    return knex.schema.createTable("deputies", (t) => {
        t.integer("id").primary();
        t.string("nome");
        t.string("nomeServidor");
        t.string("partido");
        t.string("endereco");
        t.string("telefone");
        t.string("fax");
        t.string("email");
        t.string("sitePessoal");
        t.string("atividadeProfissional");
        t.string("naturalidadeMunicipio");
        t.string("naturalidadeUf");
        t.string("dataNascimento");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("deputies");
};
