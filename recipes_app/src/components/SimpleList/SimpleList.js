import React, { Component } from 'react';

class SimpleList extends Component {
    render() {
        var listItems = '';

        if(this.props.list != null) {
            listItems =  this.props.list.map((listItem, index) =>
                <li data-id={index} key={index}>{listItem} </li>
            )
        }
        
        return (
            this.props.type === 'ordered' ?  <ol>{listItems}</ol> : <ul>{listItems}</ul>
        )
    }
}

export default SimpleList;
