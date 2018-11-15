import React, { Component } from 'react';
import logo from './logo.svg';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import RecipeForm from './components/RecipeForm/RecipeForm';
import RecipeList from './components/RecipeList/RecipeList';
import SplitPane from './components/SplitPane/SplitPane';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.handleSelectRecipe = this.handleSelectRecipe.bind(this);
    this.handleAddRecipe = this.handleAddRecipe.bind(this);

    // hardcoded for now, this is ideally added from a form
    this.state = {
      recipe1: {
        recipeId: 0,
        title: "Recipe Title 1",
        description: "Recipe Description 1",
        ingredients: ["1 cup sugar"],
        procedure: ["Sample Step 1", "Sample Step 2"],
        category: "Dessert",
        servingSize: "5",
        prepTime: "20 mins",
        cookingTime: "30 mins",
        isFavorite: true
      },
      recipe2: {
        recipeId: 1,
        title: "Recipe Title 2",
        description: "Recipe Description 2",
        ingredients: ["1 cup sugar"],
        procedure: ["Sample Step 1", "Sample Step 2"],
        category: "Dessert",
        servingSize: "5",
        prepTime: "20 mins",
        cookingTime: "30 mins",
        isFavorite: true
      },
      recipe3: {
        recipeId: 2,
        title: "Recipe Title 3",
        description: "Recipe Description 3",
        ingredients: ["1 cup sugar"],
        procedure: ["Sample Step 1", "Sample Step 2"],
        category: "Dessert",
        servingSize: "5",
        prepTime: "20 mins",
        cookingTime: "30 mins",
        isFavorite: true
      },
      recipes: [],
      recipe: {}
    };
  }

  componentDidMount() {
    this.setState({ recipes: [this.state.recipe1, this.state.recipe2, this.state.recipe3], recipe: this.state.recipe1 });
    console.log("state id = " + this.state.recipe.recipeId);
  }

  handleSelectRecipe(event) {
    let recipeId = this.state.recipe.recipeId;
    if (event.currentTarget.dataset.id) {
      recipeId = event.currentTarget.dataset.id;
    }

    this.setState({ recipe: this.state.recipes[recipeId] }, () => {
      console.log(this.state.recipeId, ' recipeId');
      console.log(this.state.recipe.recipeId, ' recipe recipeId');
    });
  }

  handleAddRecipe(event, recipe) {
    this.setState({
      recipes: this.state.recipes.push(recipe)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Recipes</h1>
        </header>
        <br />
        <div>
          <RecipeForm onAddRecipe={() => console.log(this.state)}/>
          <SplitPane
            left={
              <RecipeList recipes={this.state.recipes} selectRecipe={this.handleSelectRecipe} />}
            right={
              <RecipeDetail recipe={this.state.recipe} />
            } />
        </div>
      </div>
    );
  }
}

export default App;
