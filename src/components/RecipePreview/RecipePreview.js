import React, { Component } from 'react';
import './RecipePreview.css';

class RecipePreview extends Component {
    render() {
        return (
            <li className="RecipePreview" data-id={this.props.recipe.recipeId} onClick={this.props.selectRecipe}>
                <h2>{this.props.recipe.title}</h2>
                <span>{this.props.recipe.description}</span>
                <br /><br />
                <h4>Cooking Time: {this.props.recipe.cookingTime} | Prep Time: {this.props.recipe.prepTime}</h4>
            </li>
        )
    }
}

export default RecipePreview;
