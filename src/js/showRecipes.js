import { recipes } from "./recipes.js";
import { recipesListTemplate } from "./templates/recipesListTemplate.js";

const recipesList = document.querySelector("#list-recipes");
const searchInput = document.querySelector(".form-control");
const searchForm = document.querySelector(".form-inline");

const searchParams = new URLSearchParams(window.location.search);
const searchFilter = searchParams.get("searchBy");

// const showRecipes = (searchValue) => {
//   const filterRecipes = recipes.filter(
//     (recipe) =>
//       recipe.name.toLowerCase().includes(searchValue) ||
//       recipe.description.toLowerCase().includes(searchValue)
//     // ||
//     // recipe.ingredients.filter((element) => {
//     //   element.ingredient.toLowerCase().includes(searchValue);
//     // })
//   );

//   recipesList.innerHTML = filterRecipes
//     .map((recipe) => recipesListTemplate(recipe))
//     .join("");
// };

// const MINIMUM_MATCHING_PERCENTAGE = 0.6;

// const createChunk = (
//   recipes,
//   chunkSize = 50,
//   offset = 0,
//   recipesChunked = []
// ) => {
//   if (recipes.length === 0) {
//     return recipesChunked;
//   }
//   const chunk = recipes.splice(offset, offset + chunkSize);

//   return createChunk(recipes, chunkSize, offset + chunkSize, [
//     ...recipesChunked,
//     chunk,
//   ]);
// };

const filterRecipesBySearchText = (searchFilter) => {
  console.log(searchParams.get("searchBy"));
  const checkIfMatch = (text, search) => {
    const [formattedText, formattedSearch] = [
      text.trim().toLowerCase(),
      search.trim().toLowerCase(),
    ];

    // const numberOfLetterMatched = 0;
    // for (let index; index < formattedText.length; index++) {
    //   const letter = formattedText[index];
    //   if (formattedSearch.includes(letter)) {
    //     numberOfLetterMatched += 1;
    //   }
    // }
    // return (
    //   numberOfLetterMatched / formattedText.length >=
    //   MINIMUM_MATCHING_PERCENTAGE
    // );

    return formattedText.includes(formattedSearch);
  };

  return recipes.filter(({ name, description, ingredients }) =>
    [
      name,
      description,
      ...ingredients.map(({ ingredient }) => ingredient),
    ].some((value) => checkIfMatch(value, searchFilter))
  );
};

// createChunk(recipes, 10).find((chunk) =>
//   filterRecipesBySearchText("coco")(chunk)
// );

let recipeFound = filterRecipesBySearchText("");

const renderRecipes = () => {
  recipesList.innerHTML = recipeFound
    .map((recipe) => recipesListTemplate(recipe))
    .join("");
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchInput.value.length >= 3) {
    searchParams.append("searchBy", searchInput.value);

    recipeFound = filterRecipesBySearchText(searchFilter);
    return renderRecipes();
  }
});

searchInput.addEventListener("change", () => {
  searchParams.set("searchBy", searchInput.value);
  window.location.search = searchParams;

  recipeFound = filterRecipesBySearchText(searchFilter);
  return renderRecipes();
});

renderRecipes();
