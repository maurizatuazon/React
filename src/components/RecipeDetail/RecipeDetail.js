import React, { Component } from 'react';
import RecipePreview from '../../components/RecipePreview/RecipePreview';
import SimpleList from '../../components/SimpleList/SimpleList';
import './RecipeDetail.css';

class RecipeDetail extends Component {
    render() {
        return (
            <div className="RecipeDetail">
                <RecipePreview selectedRecipe={this.props.selectedRecipe} />
                <h4>Ingredients:</h4>
                <SimpleList list={this.props.selectedRecipe.ingredients} type='unordered'/>
                <h4>Procedure:</h4>
                <SimpleList list={this.props.selectedRecipe.procedure} type='ordered'/>
                <hr />
            </div>
        )
    }
}

export default RecipeDetail;

