import React, { Component } from 'react';
import RecipePreview from '../../components/RecipePreview/RecipePreview';

class RecipeList extends Component {
    render() {
        return (
            <ul>
                {this.props.recipes.map((recipeItem, index) =>
                    <RecipePreview key={index} selectedRecipe={recipeItem} selectRecipe={this.props.selectRecipe} />
            )}
            </ul>
        )
    }
}

export default RecipeList;
