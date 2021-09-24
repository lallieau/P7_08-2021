import { recipes } from "./data/recipes.js";

export const filterRecipes = (searchQuery, filters) => {
  const newRecipeFound = [];

  const checkIfFilterMatch = (filter, recipeTags) =>
    recipeTags.some((recipeTag) => filter === recipeTag.toLowerCase().trim());

  for (let i = 0; i < recipes.length; i++) {
    if (newRecipeFound[i]) continue;

    if (
      recipes[i].name.toLowerCase().includes(searchQuery) ||
      recipes[i].description.toLowerCase().includes(searchQuery)
    ) {
      newRecipeFound[i] = recipes[i];
    }

    for (let d = 0; d < recipes[i].ingredients.length; d++) {
      if (
        recipes[i].ingredients[d].ingredient.toLowerCase().includes(searchQuery)
      ) {
        newRecipeFound[i] = recipes[i];
      }
    }
  }

  return newRecipeFound.filter(({ ustensils, ingredients, appliance }) => {
    const recipeTags = [
      ...ustensils,
      ...ingredients.map(({ ingredient }) => ingredient),
      appliance,
    ];
    return filters.every((filter) =>
      checkIfFilterMatch(filter.tag, recipeTags)
    );
  });
  return newRecipeFound;
};
