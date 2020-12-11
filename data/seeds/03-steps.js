exports.seed = function (knex) {
    return knex('steps').insert([
      { step_order: 1, 
        step_text: 'Preparing the Meat', 
        recipe_id: 1 },
      {
        step_order: 2,
        step_text: 'Preparing the vegetables',
        recipe_id: 2,
      },
      {
        step_order: 3,
        step_text: 'preparing the Taco Shells',
        recipe_id: 1,
      },
      {
        step_order: 4,
        step_text: 'Grill the bread with butter on',
        recipe_id: 3,
      },
      {
        step_order: 5,
        step_text: 'Putting it all together',
        recipe_id: 3,
      },
      {
        step_order: 6,
        step_text: 'Bake in the oven for 40 to 45 minutes',
        recipe_id: 2,
      },
    ]);
  };
  