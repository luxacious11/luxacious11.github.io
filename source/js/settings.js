const deployID = 'AKfycbyU27BN16nzFbO0Vuboidv68ZpXXZ1vbNmR_vY25el_ijq3cliInm-6K5LC9McTbcrv';
const sheetID = `1khon8SsEWHCd4QA9Vgal7RFNy_Y_yHtAzvzUIFVa6Ho`;
const oldSheetID = `1KDKs6Kh7dXd9V3Vgcw9ipLPiaDsUqiyRPNGYw7wFnsQ`;
const successMessage = `<p class="fullWidth">Submission successful!</p>
<button onclick="location.reload();" type="button" class="fullWidth submit">Back to form</button>`;
const threadTags = ["vital", "priority", "rapidfire", "romantic", "family", "friends", "coworkers"];
const chartColors = [
    '#6c90c7', //blue
    '#c283ac', //pink
    '#b483c2', //purple
    '#699e9c', //teal
    '#afa073', //yellow
    '#a9826b', //orange
    '#799e6c', //green
    '#b66363' //red
];

const datasetOptions = {
    backgroundColor: chartColors,
    borderWidth: 5,
    borderColor: '#3e3e3e'
};

const chartOptions = {
    type: 'doughnut',
    options: {
        cutout: '35%',
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: localStorage.getItem('theme') === 'light' ? '#767676' : '#e7e7e7',
                    font: {
                        family: 'Nunito Sans, sans-serif',
                        size: '9',
                        weight: 'bold'
                    }
                }
            }
        }
    }
};

const noLegend = {
    scales: {
        x: {
            ticks: {
                color: localStorage.getItem('theme') === 'light' ? '#767676' : '#e7e7e7',
                font: {
                    family: 'Nunito Sans, sans-serif',
                    size: '8',
                    weight: 'bold'
                }
            }
        },
        y: {
            ticks: {
                color: localStorage.getItem('theme') === 'light' ? '#767676' : '#e7e7e7',
                font: {
                    family: 'Nunito Sans, sans-serif',
                    size: '8',
                    weight: 'bold'
                }
            }
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        }
    }
};