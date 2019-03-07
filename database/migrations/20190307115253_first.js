exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists("titles"),
    knex.schema.createTable("titles", function(t) {
      t.increments("id").primary();
      t.string("title").nullable();
      t.string("model").nullable();
      t.string("sku").nullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("titles")]);
};
