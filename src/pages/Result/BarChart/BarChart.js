import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = (props) => {
    const { candidates } = props;

    //calculating candidate vote percentage
    const calculatePercentage = (totalVotesArray) => {
        let castedVote = 0;
        let totalVotesLength = totalVotesArray?.length;
        let ans = [];
        for (let i = 0; i < totalVotesLength; i++) {
            castedVote = castedVote + totalVotesArray[i];
        }
        for (let i = 0; i < totalVotesLength; i++) {
            let temp = (totalVotesArray[i] / castedVote) * 100;
            ans[i] = temp.toFixed(2);
        }
        return ans;
    }
    // making new array of all candidates vote count
    let totalVotesArray = candidates?.map(candidate => candidate.voteCount)
    let votePercentage = calculatePercentage(totalVotesArray);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Voting Graph',
            },
            tooltip: {
                titleMarginBottom: 5,
                titleFont: { size: 16 },
                bodyFont: { size: 15 }
            }
        },
        barThickness: 'flex',
        barPercentage: 0.5,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                min: 0,
                max: 100
            }
        }
    };
    const labels = candidates?.map(candidate => candidate?.name)
    const data = {
        labels,
        datasets: [
            {
                data: votePercentage,
                // data: candidates?.map((candidate) => Math.round((candidate.voteCount / 100000) * 100)),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    };
    return (
        <Bar
            options={options}
            data={data} />
    );
};

export default BarChart;