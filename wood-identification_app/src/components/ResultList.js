import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./ResultList.css";

class ResultList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const formattedRows = this.props.rows.map(item => {
        //     item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        // });
        return (
            <div className="result-list">
                <DataGrid
                    rows={this.props.rows}
                    columns={this.props.columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        )
    }

}

export default ResultList;