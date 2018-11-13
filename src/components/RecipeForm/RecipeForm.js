import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeTitle: '',
            recipeDescription: ''
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
        return (
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

export default RecipeForm;