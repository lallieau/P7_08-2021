import { recipes } from "./recipes.js";

const recipesList = document.getElementById("list-recipes");

const recipesListTemplate = (recipe) => {
  //console.log(recipe);
  return `
    <div class="card-recipe">
        <img src="./src/public/assets/food.png" class="card-img-top" alt="..." />
        <div class="card-recipe__body">
            <div class="card-recipe__header">
                <h2 class="card-recipe__title">${recipe.name}</h5>
                <div class="card-recipe__time">
                    <!-- <i class="bi bi-clock"></i> -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-clock"
                        viewBox="0 0 16 16"
                    >
                        <path
                        d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                        />
                        <path
                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                        />
                    </svg>
                    <p>${recipe.time} min</p>
                </div>
            </div>
            <div class="card-recipe__content">
                <ul class="card-recipe__list-ingredients">
                    <li class="card-recipe__list-ingredients__name">
                        <strong>Lait de coco</strong> 400ml
                    </li>
                    <li class="card-recipe__list-ingredients__name">
                        <strong>Jus de citron:</strong> 2
                    </li>
                    <li class="card-recipe__list-ingredients__name">
                        <strong>Créme de coco:</strong> 4 cuillères
                    </li>
                    <li class="card-recipe__list-ingredients__name">
                        <strong>Sucre:</strong> 20g Glaçons: 2
                    </li>
                </ul>
                <p class="card-recipe__text">
                ${recipe.description}
                </p>
            </div>
        </div>
    </div>
      `;
};

// recipesList.innerHTML = recipes.map((recipe) => {
//   recipesListTemplate(recipe);
// });

recipes.forEach((recipe) => {
  recipesListTemplate(recipe);
});

recipesList.innerHTML = recipes
  .map((recipe) => recipesListTemplate(recipe))
  .join("");

// recipes.forEach((recipe) => {
//       const ingredientsList = recipe.ingredients;
//       ingredientsList.forEach((recipeIngredients) => {
//         console.log(recipeIngredients.ingredient);
//       });
//   });
