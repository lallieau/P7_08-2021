import { recipes } from "./data/recipes.js";

export const filterRecipes = (searchQuery, filters) => {
  const checkSearchQuery = ({ name, description, ingredients }) => {
    return [
      name,
      description,
      ...ingredients.map(({ ingredient }) => ingredient),
    ].some((text) => {
      const [formattedText, formattedSearch] = [
        text.trim().toLowerCase(),
        searchQuery.trim().toLowerCase(),
      ];

      return formattedText.includes(formattedSearch);
    });
  };

  const checkIfFilterMatch = ({ ustensils, ingredients, appliance }) =>
    filters.every((filter) =>
      [
        ...ustensils,
        ...ingredients.map(({ ingredient }) => ingredient),
        appliance,
      ].some((recipeTag) => filter.tag === recipeTag.toLowerCase().trim())
    );

  return recipes.filter(
    (recipe) => checkIfFilterMatch(recipe) && checkSearchQuery(recipe)
  );
};
