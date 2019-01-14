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
      newRecipe: {
          title: '',
          description: '',
          ingredients: [],
          procedure: [],
          category: "Dinner",
          servingSize: 0,
          timeUnit: "minutes",
          prepTime: 0,
          cookingTime: 0,
          isFavorite: false,
          ingredientsTemp: "",
          procedureTemp: ""
      },
      recipes: [{
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
      },{
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
      }],
      selectedRecipe: {},
      
    };
  }

  componentDidMount() {
    this.setState({ selectedRecipe: this.state.recipes[0] });
  }

  handleSelectRecipe(event) {
    let recipeId = this.state.selectedRecipe.recipeId;
    if (event.currentTarget.dataset.id) {
      recipeId = event.currentTarget.dataset.id;
    }

    this.setState({ selectedRecipe: this.state.recipes[recipeId] }, () => { console.log(this.state.selectedRecipe)});
   
  }

  handleAddRecipe(newRecipe) {
    let recipeId = 0;

    if(this.state.recipes.length > 0) {
      recipeId = Math.max.apply(Math, this.state.recipes.map(function(o) { return o.recipeId; })) + 1;
    }

    newRecipe.recipeId = recipeId;
    var newData = this.state.recipes.concat([newRecipe]);  
    this.setState({
      recipes: newData,
      newRecipe: {}
    }, () => {console.log(this.state)});
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
          <RecipeForm {...this.state.newRecipe} onAddRecipe={(newRecipe) => this.handleAddRecipe(newRecipe)}/>
          <SplitPane
            left={
              <RecipeList recipes={this.state.recipes} selectRecipe={this.handleSelectRecipe} />}
            right={
              <RecipeDetail selectedRecipe={this.state.selectedRecipe} />
            } />
        </div>
      </div>
    );
  }
}

export default App;
