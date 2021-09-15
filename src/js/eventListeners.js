import { renderRecipes, renderAdvancedSearch } from "./renderRecipes.js";
import { filterRecipesBySearchText, filterRecipesByTag } from "./controller.js";
import { tagListTemplate } from "./templates.js";

export let searchFilter = "";
export let tagName = [""];
export let recipeFound = filterRecipesBySearchText(searchFilter); //&& filterRecipesByTag(tagName);

const searchInput = document.querySelector(".form-control");
const tagsList = document.querySelector(".tags");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length >= 3) {
    recipeFound = filterRecipesBySearchText(searchInput.value);
  }
  return renderRecipes(), renderAdvancedSearch();
});

const displayTag = (categoryName) => {
  tagName.map(
    (element) => (tagsList.innerHTML = tagListTemplate(element, categoryName))
  );

  const closeBtn = document.querySelector(".fa-times-circle");
  closeBtn.addEventListener("click", (e) => {
    const currentTagName = e.path[1].innerText.trim();
    const positionIndex = tagName.indexOf(currentTagName);

    tagName.splice(positionIndex, 1);
    e.path[1].outerHTML = "";
  });
};

document.addEventListener("click", (event) => {
  if (event.target.id === "input-ingredients") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        tagName.push(event.target.textContent);
        displayTag("ingredients");
      }
    });
  }

  if (event.target.id === "input-appliances") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        tagName.push(event.target.textContent);
        displayTag("appliances");
      }
    });
  }

  if (event.target.id === "input-ustensils") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        tagName.push(event.target.textContent);
        displayTag("ustensils");
      }
    });
  }
});
