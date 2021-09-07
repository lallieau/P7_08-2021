import { renderRecipes, renderAdvancedSearch } from "./renderRecipes.js";
import { filterRecipesBySearchText } from "./controller.js";

const filterName = ["coco", "citron"];
let searchFilter = "";
export let recipeFound = filterRecipesBySearchText(searchFilter, filterName);

const searchInput = document.querySelector(".form-control");
export const linkItems = document.querySelectorAll(".dropdown-item");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length >= 3) {
    searchFilter = searchInput.value;
  }
  recipeFound = filterRecipesBySearchText(searchFilter, filterName);

  return renderRecipes(), renderAdvancedSearch();
});

// linkItems.forEach((item) =>
//   item.addEventListener(
//     "click",
//     console.log(item.textContent)
//     // console.log(filterName)
//     // filterName.push(item.textContent)
//     // console.log(filterName)
//   )
// );
