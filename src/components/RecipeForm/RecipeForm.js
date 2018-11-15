import React, { Component } from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeTitle: '',
            recipeDescription: '',
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
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildServingSizeOptions = this.buildServingSizeOptions.bind(this);
        this.handleAddIngredients = this.handleAddIngredients.bind(this);
        this.handleAddProcedure = this.handleAddProcedure.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddRecipe(this.state);
    }

    buildServingSizeOptions() {
        var servingSizeOptions = [];

        for (let i = 1; i <= 10; i++) {
            servingSizeOptions.push(<option key={i} value={i}>{i}</option>)
        }

        return servingSizeOptions;
    }

    handleAddIngredients(event){
        this.setState({
            ingredients : this.state.ingredients.concat([this.state.ingredientsTemp]),
            ingredientsTemp: ""
        });
    }

    handleAddProcedure(event){
        this.setState({
            procedure : this.state.procedure.concat([this.state.procedureTemp]),
            procedureTemp: ""
        });
    }

    render() {
        return (
            <div className="RecipeForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="RecipeForm__input">
                        <label htmlFor="recipeTitle">Recipe Title:</label>
                        <input name="recipeTitle" onChange={this.handleChange}
                            type="text"
                            value={this.state.recipeTitle}
                        />
                    </div>
                    <div className="RecipeForm__input">
                        <label htmlFor="recipeDescription">Recipe Description:</label>
                        <textarea name="recipeDescription" onChange={this.handleChange}
                            type="text"
                            value={this.state.recipeDescription}
                        />
                    </div>
                    <div className="RecipeForm__input">
                        <label htmlFor="category">Category:</label>
                        <select value={this.state.category} name="category" onChange={this.handleChange}>
                            <option value="Dessert">Dessert</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                    </div>
                    <div className="RecipeForm__input">
                        <label htmlFor="servingSize">Serving Size:</label>
                        <select value={this.state.servingSize} name="servingSize" onChange={this.handleChange}>
                            {this.buildServingSizeOptions()}
                        </select>
                    </div>
                    <div className="RecipeForm__input">
                        <label htmlFor="ingredientsTemp">Ingredients:</label>
                        {this.state.ingredients.map((ingredient) => <p key={ingredient}>{ingredient}</p>)}
                        <input name="ingredientsTemp" onChange={this.handleChange}
                            type="text"
                            value={this.state.ingredientsTemp}
                        />
                        <input type="button" value="+" onClick={this.handleAddIngredients} />
                    </div>
                    <div className="RecipeForm__input">
                        <label htmlFor="procedureTemp">Procedure:</label>
                        {this.state.procedure.map((proc) => <p key={proc}>{proc}</p>)}
                        <input name="procedureTemp" onChange={this.handleChange}
                            type="text"
                            value={this.state.procedureTemp}
                        />
                        <input type="button" value="+" onClick={this.handleAddProcedure} />
                    </div>
                    <div className="RecipeForm__input">
                        <label htmlFor="timeUnit">Time Unit:</label>
                        <input type="radio" name="timeUnit"  onChange={this.handleChange}
                            checked={this.state.timeUnit === "minutes"}
                            value="minutes" /> minutes
                        <input type="radio" name="timeUnit"  onChange={this.handleChange}
                            checked={this.state.timeUnit === "hours"}
                            value="hours" /> hours
                    </div>
                    <div className="RecipeForm__input">
                        <label htmlFor="prepTime">Preparation Time</label>
                        <input name="prepTime" onChange={this.handleChange}
                            type="number"
                            value={this.state.prepTime}
                        />
                    </div>
                    <div className="RecipeForm__input">
                        <label htmlFor="cookingTime">Cooking Time</label>
                        <input name="cookingTime" onChange={this.handleChange}
                            type="number"
                            value={this.state.cookingTime}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default RecipeForm;