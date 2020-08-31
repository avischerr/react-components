class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
  <li>{this.props.shoppingList}</li>
  );
  }
}

var GroceryList = (props) => (
<ul>{props.shoppingList.map(shoppingList =>
<GroceryListItem shoppingList= {['Bananas', 'Apples', 'DragonFruit']})}
</ul>
)

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.shoppingList[0]}</li>
//     <li>{props.shoppingList[1]}</li>
//     <li>{props.shoppingList[2]}</li>
//   </ul>
// );

var GroceryList = () => (
<div>
  <h2>Our Grocery List</h2>
  <GroceryListItem shoppingList={['Bananas', 'Apples', 'Dragonfruit']}/>
  </div>
);


ReactDOM.render(<GroceryList/>, document.getElementById("app"));


//  var Bananas = () => (
//   <li>
//     Bananas
//   </li>
// );

// var Apples = () => (
//   <li>
//     Apples
//   </li>
// );
// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));


/*

DONE - Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app

To appreciate what ES6 and JSX offers when writing React code, copy the snippets above into the Babel REPL and see what they look like in ES5

DONE - Create React components for the 2 items in your grocery list. For example, if your grocery list contains "cucumbers" and "kale", create a Cucumbers component and a Kale component

DONE - Use these two new components inside your GroceryList component instead of the hardcoded <li>s

Create a reusable GroceryListItem component that dynamically renders a given grocery item

Refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component

Refactor GroceryListItem to be a class component

Make it so that when your mouse hovers over a <li> of a GroceryListItem that it turns bold

*/