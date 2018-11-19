import React, { Component } from 'react';
import './RecipePreview.css';

class RecipePreview extends Component {
    render() {
        return (
            <li className="RecipePreview" data-id={this.props.selectedRecipe.recipeId} onClick={this.props.selectRecipe}>
                <h2>{this.props.selectedRecipe.title}</h2>
                <span>{this.props.selectedRecipe.description}</span>
                <br /><br />
                <h4>Cooking Time: {this.props.selectedRecipe.cookingTime} | Prep Time: {this.props.selectedRecipe.prepTime}</h4>
                <h4>Category: {this.props.selectedRecipe.category}</h4>
                <h4>Serving Size: {this.props.selectedRecipe.category}</h4>
            </li>
        )
    }
}

export default RecipePreview;
