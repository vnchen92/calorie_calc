const calLabels = ['Protein', 'Carb', 'Fat'];

const calCount = {
    labels: calLabels,
    datasets: [{
        data: [0, 0, 0],
        backgroundColor: [
            'rgb(191, 196, 134, .7)',
            'rgb(111, 214, 90, .7)',
            'rgb(217, 217, 95, .7)'
        ],
        borderColor: [
            'rgb(191, 196, 134)',
            'rgb(111, 214, 90)',
            'rgb(217, 217, 95)'
        ],
        borderWidth: 2,
        hoverBackgroundColor: 'rgb(204, 147, 73, .7)',
        hoverBorderColor: 'rgb(204, 147, 73)'
    }]
};

// const currentTotalCalLine = {
//     beforeDataSetsDraw(chart, args, options){
//         const {ctx, chartArea: {top, right, bottom, left, width, height}, scales: {x, y}} = chart;
//         ctx.save();
//         ctx.strokeStyle = 'yellow';
//         ctx.setLineDash([10,10]);
//         ctx.strokeRect(left, y.getPixelForValue(500), width, 0);
//         ctx.restore();
//     }
// }

exports.config = {
    type: 'bar',
    data: calCount,
    options: {
        animations: {
            duration: 1000
        },
        scales: {
            x: {
                grid: {
                    borderColor: 'rgb(204, 147, 73)'
                },
                ticks: {
                    
                }
            },
            y: {
                grid: {
                    borderColor: 'rgb(204, 147, 73)'
                },
                title: {
                    display: true,
                    text: 'Calories per Macro'
                    //color:
                },
                ticks: {
                    
                },
                max: 800
            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                backgroundColor: 'rgba(158, 161, 122, 0.5)',
                titleFontColor: 'white',
                titleAlign: 'center',
                titleMarginBottom: 0,
                bodyFontColor: 'white',
                borderWidth: 1,
                borderColor: 'white',
                callbacks: {
                    label: function(item, data){
                        let currentCal = item.raw;
                        if (item.label === 'Protein' || item.label === 'Carb'){
                            return `${Math.floor(currentCal/4)}g`;
                        } else {
                            return `${Math.floor(currentCal/9)}g`;
                        }
                    },
                    afterLabel: function(item, data){
                        return `${item.raw} kcal`
                    },
                    footer: function(item, data){
                        let totalCal = 0;
                        let currentCal = item[0].raw;
                        let dataArray = item[0].dataset.data;
                        for (let i = 0; i < dataArray.length; i++){
                            totalCal += dataArray[i];
                        }
                        return `${Math.round((currentCal/totalCal) * 100)}% of Total Calories`;
                    }
                }
            }
        }
    }
    //plugins: [currentTotalCalLine]
};