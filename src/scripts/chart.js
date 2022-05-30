const calLabels = ['Protein', 'Carb', 'Fat'];

const calCount = {
    labels: calLabels,
    datasets: [{
        data: [0, 0, 0],
        backgroundColor: ['beige', 'green', 'yellow']
    }]
};

const config = {
    type: 'bar',
    data: calCount,
    options: {
        scales: {
            x: {
                ticks: {
                    
                }
            },
            y: {
                ticks: {
                    
                },
                max: 1500,
                beginAtZero: true
            },
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Current Calories',
                font: {
                    size: 15
                }
            },
            tooltip: {
                yAlign: 'bottom'
                //displayColors: false,
                // callbacks: {

                // }
            }
        }
    }
};

module.exports = {config, calCount, calLabels}