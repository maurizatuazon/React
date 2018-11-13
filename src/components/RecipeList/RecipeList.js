import React, { Component } from 'react';
import RecipePreview from '../../components/RecipePreview/RecipePreview';

class RecipeList extends Component {
    render() {
        let listItems = this.props.recipes.map((recipeItem, index) =>
            <RecipePreview key={index} recipe={recipeItem} selectRecipe={this.props.selectRecipe} />
        );

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default RecipeList;
