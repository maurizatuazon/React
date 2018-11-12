import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        recipeTitle : '',
        recipeDescription : ''
    };
 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('A recipe title was submitted: ' + this.state.recipeTitle);
    event.preventDefault();
  }

  render() {
    return(
      <div className="RecipeForm">
        <form onSubmit={this.handleSubmit}>
          <label>Recipe Title: 
            <input 
              name="recipeTitle"
              type="text"
              value={this.state.recipeTitle}
              onChange={this.handleChange}
            />  
          </label>
          <br />
          <label>Recipe Description: 
            <textarea 
              name="recipeDescription"
              type="text"
              value={this.state.recipeDescription}
              onChange={this.handleChange}
            />  
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>  
    );
  }
}

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecipesShown: this.props.isRecipesShown,
      recipes : this.props.recipes,
      showRecipeDetail : false
    };

    this.handleToggleShowRecipeDetail = this.handleToggleShowRecipeDetail.bind(this);
  }

  handleToggleShowRecipeDetail() {
    this.setState(state => ({
      showRecipeDetail: !state.showRecipeDetail
    }));
  }

  render() {
    if (!this.props.isRecipesShown) {
      return null;
    }

    const listItems = this.state.recipes.map((recipeItem, index) =>
      <RecipeDetail key={recipeItem.title.toString()}
                recipe={recipeItem} />
    );

    return(
      <div>
        {listItems}
      </div>
    )
  }
}

class RecipeDetail extends Component {
  render() {
    return(
      <div className="RecipeDetail">
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
        <hr/>
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
      recipes : [],
      showRecipes: false,
    };

    this.handleToggleShowRecipes = this.handleToggleShowRecipes.bind(this);
  }

  handleToggleShowRecipes() {
    this.setState(state => ({
      showRecipes: !state.showRecipes
    }));
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
        <br/>
        <div>
          <button onClick={this.handleToggleShowRecipes}>
            {this.state.showRecipes ? 'Hide' : 'Show'} Recipes
          </button>
          <RecipeForm />
          <RecipeList isRecipesShown={this.state.showRecipes} recipes={[this.state.recipe, this.state.recipe]}/> 
        </div>
      </div>
    );
  }
}

export default App;
