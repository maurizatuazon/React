import React, { Component } from 'react';
import "./WoodInformation.css";
import { info_labels } from "../constants";

class WoodInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dataKeys = Object.keys(this.props.data);
        return (
            <div className="wood-info">
                <div className="wood-image">
                    <img src="sampleWood.jpg" alt="Sample Wood"/>
                </div>
                <div >
                    {dataKeys.map(key => {
                        console.log(key);
                        return <div className="wood-data">
                            <div className="data-label">{info_labels[key]}</div>
                            <div className="data-value">{this.props.data[key]}</div>
                        </div>
                    })
                    }
                </div>
            </div>
        )

    }

}

export default WoodInformation;