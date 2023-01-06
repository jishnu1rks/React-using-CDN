const secretIngredients = [
  "1 cup unsalted butter",
  "1 cup crunchy peanut butter",
  "1 cup brown sugar",
  "1 cup white sugar",
  "2 eggs",
  "2.5 cups all purpose flour",
  "1 teaspoon baking powder",
  "0.5 teaspoon salt",
];

function IngredientsList({ item }) {
  return React.createElement(
    "ul",
    { className: "ingredients" },
    item.map((ingredient, i) => React.createElement("li", null, ingredient))
  );
}
ReactDOM.render(
  React.createElement(IngredientsList, { item: secretIngredients }, null),
  document.querySelector("#root")
);
