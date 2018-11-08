import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RecipeDetail extends Component {
  render() {
    return(
      <div className="Recipe">
        <h2>{this.props.recipe.title}</h2>
        <span>{this.props.recipe.description}</span>
        <br/><br/>
        <h4>Ingredients:</h4>
        <span>{this.props.recipe.ingredients}</span>
        <br/><br/>
        <h4>Procedure:</h4>
        <span>{this.props.recipe.procedure}</span>
        <br/><br/>
        <h4>Cooking Time: {this.props.recipe.cookingTime} | Prep Time: {this.props.recipe.prepTime}</h4>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    // hardcoded for now, this is ideally from a form
    this.state = { recipe :{
          title: "Recipe Title",
          description: "Recipe Description",
          ingredients: ["1 cup sugar"],
          procedure: ["Sample Step 1", "Sample Step 2"],
          category: "Dessert",
          servingSize: "5",
          prepTime: "20 mins",
          cookingTime: "30 mins",
          isFavorite: true
      },
      showRecipes: false,
    };

    this.onShowRecipes = this.onShowRecipes.bind(this);
  }

  onShowRecipes() {
    this.setState({
      showRecipes: true,
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
          <br/>
          
          <h1>Recipes</h1>
          <button onClick={this.onShowRecipes}>Show Recipes</button>
        </header>
        {this.state.showRecipes ? <RecipeDetail recipe={this.state.recipe} /> : null}
      </div>
    );
  }
}

export default App;
