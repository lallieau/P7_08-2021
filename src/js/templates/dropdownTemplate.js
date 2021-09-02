export const elementsListTemplate = (element) => {
  return `<li><a class="dropdown-item" href="">${element}</a></li>`;
};

export const tagListTemplate = (tagName) => {
  return `  
  <div class="tag">
    <button class="tag__close"></button>
    <p class="tag__name">${tagName}</p>
  </div>
  `;
};
