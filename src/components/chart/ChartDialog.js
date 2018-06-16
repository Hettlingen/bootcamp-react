import React, { Component } from 'react';
import './ChartDialog.css';
import {Bar} from 'react-chartjs-2';

class ChartDialog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var chartDate = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        return (
            <div>
                < Bar data={chartDate} />
            </div>
        );
    }
}

export default ChartDialog;