import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import './SearchBar.css';



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            filepath: ""
        }
    }

    buildFileSelector = () => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('multiple', 'multiple');
        return fileSelector;
    }

    componentDidMount(){
        this.fileSelector = this.buildFileSelector();
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
        this.setState("filepath", this.fileSelector.value);
    }
    
    render() {
        return (
            <div className="SearchBar">
               <TextField 
                    id="searchbar-filepath" 
                    label="Upload image" 
                    variant="outlined" 
                    value={this.state.filepath}
                    name="filepath"
                    onChange={this.handleChange}/>
                <LoadingButton
                    id="searchbar-loading-btn"
                    loading={this.state.loading}
                    loadingIndicator="Loading..." 
                    variant="contained" 
                    color="success"
                    onClick={this.handleFileSelect}>
                    Upload
                </LoadingButton>
                <Button
                    id="searchbar-cancel-btn" 
                    variant="outlined" 
                    color="error">
                    Cancel
                </Button>
            </div>
        )
    }
}

export default SearchBar;