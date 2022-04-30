import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const totalVoter = 100000;
    const voted = 76235;

    const data = {
        labels: ['Voted', 'Remaining'],
        datasets: [
            {
                data: [voted, totalVoter - voted],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.5)'
                ],
                hoverOffset: 4,
                spacing: 2,
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 0,
                hoverBorderWidth: 2,
                radius: "70%"
            },
        ],
    };
    return (
        <Doughnut
            data={data} />
    );
};

export default DoughnutChart;