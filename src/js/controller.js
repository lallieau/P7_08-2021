import { recipes } from "./data/recipes.js";

export const filterRecipes = (searchQuery, filters) => {
  let recipeFound = recipes;

  const checkSearchQuery = (text, search) => {
    const [formattedText, formattedSearch] = [
      text.trim().toLowerCase(),
      search.trim().toLowerCase(),
    ];

    if (formattedText.includes(formattedSearch)) {
      return formattedText;
    }
  };

  const checkIfFilterMatch = (filter, recipeTags) =>
    recipeTags.some((recipeTag) => filter === recipeTag.toLowerCase().trim());

  recipeFound = recipeFound.filter(({ name, description, ingredients }) =>
    [
      name,
      description,
      ...ingredients.map(({ ingredient }) => ingredient),
    ].some((value) => checkSearchQuery(value, searchQuery))
  );

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
