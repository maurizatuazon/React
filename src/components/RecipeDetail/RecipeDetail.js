import React, { Component } from 'react';
import RecipePreview from '../../components/RecipePreview/RecipePreview';
import './RecipeDetail.css';

class RecipeDetail extends Component {
    render() {
        return (
            <div className="RecipeDetail">
                <RecipePreview recipe={this.props.recipe} />
                <h4>Ingredients:</h4>
                <span>{this.props.recipe.ingredients}</span>
                <br /><br />
                <h4>Procedure:</h4>
                <span>{this.props.recipe.procedure}</span>
                <hr />
            </div>
        )
    }
}

export default RecipeDetail;

