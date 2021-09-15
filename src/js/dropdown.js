const inputIngredient = document.querySelector("#input-ingredients");
const inputAppliance = document.querySelector("#input-appliances");
const inputUstensil = document.querySelector("#input-ustensils");

const ingredientBtn = document.querySelector("#ingredients");
const applianceBtn = document.querySelector("#appliances");
const ustensilBtn = document.querySelector("#ustensils");

const ingredientsList = document.querySelector("#ingredients-placeholder");
const appliancesList = document.querySelector("#appliances-placeholder");
const ustensilsList = document.querySelector("#ustensils-placeholder");

//
// Ouvrir et fermer les dropdown
//

const removeAppliances = () => {
  applianceBtn.classList.remove("expand-the-btn");
  appliancesList.classList.remove("expanded-appliances");
  inputAppliance.placeholder = "Appareils";
};

const removeUstensils = () => {
  ustensilBtn.classList.remove("expand-the-btn");
  ustensilsList.classList.remove("expanded-ustensils");
  inputUstensil.placeholder = "Ustensiles";
};

const removeIngredients = () => {
  ingredientBtn.classList.remove("expand-the-btn");
  ingredientsList.classList.remove("expanded-button");
  inputIngredient.placeholder = " Ingrédients";
};

// const removeDropdown = (
//   button,
//   elementsList,
//   classText,
//   inputElement,
//   placeholderText
// ) => {
//   button.classList.remove("expand-the-btn");
//   elementsList.classList.remove(classText);
//   inputElement.placeholder = placeholderText;
// };

ingredientBtn.addEventListener("click", () => {
  ingredientBtn.classList.add("expand-the-btn");
  ingredientsList.classList.add("expanded-button");
  inputIngredient.placeholder = "Recherche un ingrédient";

  removeUstensils();
  removeAppliances();
  // removeDropdown(
  //   applianceBtn,
  //   appliancesList,
  //   "expanded-appliances",
  //   inputAppliance,
  //   "Appareils"
  // );
  // removeDropdown(
  //   ustensilBtn,
  //   ustensilsList,
  //   "expanded-ustensils",
  //   inputUstensil,
  //   "Ustensiles"
  // );
});

applianceBtn.addEventListener("click", () => {
  applianceBtn.classList.add("expand-the-btn");
  appliancesList.classList.add("expanded-appliances");
  inputAppliance.placeholder = "Recherche un appareil";

  removeIngredients();
  removeUstensils();
  // removeDropdown(
  //   ustensilBtn,
  //   ustensilsList,
  //   "expanded-ustensils",
  //   inputUstensil,
  //   "Ustensiles"
  // );
  // removeDropdown(
  //   ingredientBtn,
  //   ingredientsList,
  //   "expanded-button",
  //   inputIngredient,
  //   "Ingrédients"
  // );
});

ustensilBtn.addEventListener("click", () => {
  ustensilBtn.classList.add("expand-the-btn");
  ustensilsList.classList.add("expanded-ustensils");
  inputUstensil.placeholder = "Recherche un ustensile";

  removeIngredients();
  removeAppliances();
  // removeDropdown(
  //   ingredientBtn,
  //   ingredientsList,
  //   "expanded-button",
  //   inputIngredient,
  //   "Ingrédients"
  // );
  // removeDropdown(
  //   applianceBtn,
  //   appliancesList,
  //   "expanded-appliances",
  //   inputAppliance,
  //   "Appareils"
  // );
});

document.addEventListener("click", (event) => {
  if (event.target.closest("#ingredients")) return;
  removeIngredients();
  // removeDropdown(
  //   ingredientBtn,
  //   ingredientsList,
  //   "expanded-button",
  //   inputIngredient,
  //   "Ingrédients"
  // );

  if (event.target.closest("#appliances")) return;
  removeAppliances();
  // removeDropdown(
  //   applianceBtn,
  //   appliancesList,
  //   "expanded-appliances",
  //   inputAppliance,
  //   "Appareils"
  // );

  if (event.target.closest("#ustensils")) return;
  removeUstensils();
  // removeDropdown(
  //   ustensilBtn,
  //   ustensilsList,
  //   "expanded-ustensils",
  //   inputUstensil,
  //   "Ustensiles"
  // );
});
