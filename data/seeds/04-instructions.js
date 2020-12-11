exports.seed = function (knex) {
    return knex("instructions").insert([
        { recipe_id: 1, ingredient_id: 1, ingredient_quantity: "1 teaspoon" },
        { recipe_id: 1, ingredient_id: 2, ingredient_quantity: "2 cups" },
        { recipe_id: 1, ingredient_id: 3, ingredient_quantity: "2 pinches" },
        { recipe_id: 1, ingredient_id: 4, ingredient_quantity: "100 grams" },
        { recipe_id: 2, ingredient_id: 2, ingredient_quantity: "4 cups" },
        { recipe_id: 2, ingredient_id: 4, ingredient_quantity: "1/4 cup" },
        { recipe_id: 3, ingredient_id: 1, ingredient_quantity: "50 grams" },
        { recipe_id: 3, ingredient_id: 2, ingredient_quantity: "75 grams" },
        { recipe_id: 3, ingredient_id: 4, ingredient_quantity: "10 grams" },
        { recipe_id: 3, ingredient_id: 5, ingredient_quantity: "1 cup" },
        { recipe_id: 3, ingredient_id: 6, ingredient_quantity: "1 tablespoon" },
    ]);
};
  