
exports.up = function (knex) {
  return knex.schema
      .createTable("recipes", (table) => {
          table.increments("recipe_id").notNullable();
          table.string("recipe_name", 128).notNullable();
      })

      .createTable("ingredients", (table) => {
          table.increments("ingredient_id").notNullable();
          table.string("ingredient_name", 128).notNullable();
      })

      .createTable("steps", (table) => {
          table.increments("step_id").notNullable();
          table.integer("step_order")
              .unsigned().notNullable();
          table.string("step_text", 128).notNullable();
          table.integer("recipe_id")
              .unsigned().notNullable()
              .references("recipe_id").inTable("recipes")
              .onDelete("RESTRICT").onUpdate("RESTRICT");
      })

      .createTable("instructions", (table) => {
          table.increments("instruction_id").notNullable();
          table.string("ingredient_quantity", 128).notNullable();
          table.integer("recipe_id")
              .unsigned().notNullable()
              .references("recipe_id").inTable("recipes")
              .onDelete("RESTRICT").onUpdate("RESTRICT");
          table.integer("ingredient_id")
              .unsigned().notNullable()
              .references("ingredient_id").inTable("ingredients")
              .onDelete("RESTRICT").onUpdate("RESTRICT");
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  
};
