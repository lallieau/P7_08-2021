import { renderRecipes, renderAdvancedSearch } from "./renderRecipes.js";
import {
  filterRecipesBySearchText,
  filterRecipesByTags,
} from "./controller.js";
import { tagListTemplate } from "./templates.js";
import {
  inputAppliance,
  applianceContainer,
  inputIngredient,
  ingredientContainer,
  inputUstensil,
  ustensilContainer,
} from "./dropdown.js";

export let searchFilter = "";
export let filters = [];
export let recipeFound = filterRecipesBySearchText(searchFilter);

const searchInput = document.querySelector(".form-control");
const tagsList = document.querySelector(".tags");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length >= 3) {
    searchFilter = searchInput.value;
    recipeFound = filterRecipesBySearchText(searchFilter);
  }
  // else {
  //   recipeFound = filterRecipesBySearchText(searchFilter);
  // }

  return renderRecipes(), renderAdvancedSearch();
});

const displayTag = (categoryName) => {
  tagsList.innerHTML = filters
    .map((filter) => tagListTemplate(filter, categoryName))
    .join("");

  const closeBtn = document.querySelector(".fa-times-circle");

  closeBtn.addEventListener("click", (e) => {
    const currentTagName = e.path[1].innerText.trim();
    console.log(currentTagName);

    const positionIndex = filters.indexOf(currentTagName);
    console.log(positionIndex);

    filters.splice(positionIndex, 1);
    e.path[1].outerHTML = "";

    // if (tagName === [""]) {
    //   recipeFound = filterRecipesBySearchText(searchFilter);
    //   return renderRecipes(), renderAdvancedSearch();
    // } else {
    recipeFound =
      filterRecipesBySearchText(searchFilter) && filterRecipesByTags(filters);
    return renderRecipes(), renderAdvancedSearch();
    // }
  });

  recipeFound =
    filterRecipesBySearchText(searchFilter) && filterRecipesByTags(filters);
  return renderRecipes(), renderAdvancedSearch();
};

// function applyFilters() {
//   filterRecipesByTags(filters);
//   console.log(filters);
// }

inputIngredient.addEventListener("click", () => {
  const items = ingredientContainer.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (!filters.includes(event.target.textContent)) {
        filters.push(event.target.textContent);
        displayTag("ingredients");
      }
    });
  });
});

inputAppliance.addEventListener("click", () => {
  const items = applianceContainer.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (!filters.includes(event.target.textContent)) {
        filters.push(event.target.textContent);
        displayTag("appliances");
      }
    });
  });
});

inputUstensil.addEventListener("click", () => {
  const items = ustensilContainer.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (!filters.includes(event.target.textContent)) {
        filters.push(event.target.textContent);
        displayTag("ustensils");
      }
    });
  });
});

// inputAppliance.addEventListener("click", () => {
//   console.log("Coucou");
//   document.addEventListener("click", (event) => {
//     console.log("Item");
//     if (event.target.classList.contains("item")) {
//       tagName.push(event.target.textContent);
//       displayTag("appliances");
//     }
//   });
// });

// inputIngredient.addEventListener("click", () => {
//   document.addEventListener("click", (event) => {
//     // if (event.target.classList.contains("item")) {
//     //   tagName.push(event.target.textContent);
//     //   displayTag("ingredients");
//     // }
//   });
// });

// inputUstensil.addEventListener("click", () => {
//   document.addEventListener("click", (event) => {
//     // if (event.target.classList.contains("item")) {
//     //   tagName.push(event.target.textContent);
//     //   displayTag("ustensils");
//     // }
//   });
// });
