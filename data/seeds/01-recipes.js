exports.seed = function (knex) {
    return knex('recipes').insert([
      { recipe_name: 'Tacos' },
      { recipe_name: 'Cheesy Vegetable Bake' },
      { recipe_name: 'Grilled Cheese Sandwich' },
    ]);
  };
  