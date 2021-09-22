import { recipes } from "./data/recipes.js";

export const filterRecipes = (searchQuery, filters) => {
  let recipeFound = recipes;
  const newRecipeFound = [];

  const checkIfFilterMatch = (filter, recipeTags) =>
    recipeTags.some((recipeTag) => filter === recipeTag.toLowerCase().trim());

  const removeDuplicateRecipes = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  for (let i = 0; i < recipeFound.length; i++) {
    if (
      recipeFound[i].name.toLowerCase().includes(searchQuery) ||
      recipeFound[i].description.toLowerCase().includes(searchQuery)
    ) {
      newRecipeFound.push(recipeFound[i]);
    }

    for (let d = 0; d < recipeFound[i].ingredients.length; d++) {
      if (
        recipeFound[i].ingredients[d].ingredient
          .toLowerCase()
          .includes(searchQuery)
      ) {
        newRecipeFound.push(recipeFound[i]);
      }
    }
  }
  recipeFound = removeDuplicateRecipes(newRecipeFound);

  recipeFound = recipeFound.filter(({ ustensils, ingredients, appliance }) => {
    const recipeTags = [
      ...ustensils,
      ...ingredients.map(({ ingredient }) => ingredient),
      appliance,
    ];
    return filters.every((filter) =>
      checkIfFilterMatch(filter.tag, recipeTags)
    );
  });

  return recipeFound;
};
