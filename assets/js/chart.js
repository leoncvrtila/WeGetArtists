let windowWidth = window.screen.availWidth

let bar_ctx = document.getElementById('chart').getContext('2d');

let gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
gradient.addColorStop(0, '#f4781b');
gradient.addColorStop(1, '#ef2f2d');

let bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: ["Backer", "Label", "Studio", "Drummer", "Bass", "Guitar", "Singer", "Writer", "Publisher", "Acoustic Guitar", "Sax", "Key-boards", "Violin", "Harp", "Tracking", "Mixing", "Mastering", "Producer", "Publisher"],
        datasets: [
            {
            label: '',
            data: [13.3, 13.3, 13.3, 5, 5, 5, 5, 10, 10, 1, 1, 1, 1, 1, 2.5, 1, 0.5, 7, 1],
			backgroundColor: gradient,
			hoverBackgroundColor: gradient,
			hoverBorderWidth: 2,
            borderRadius: 100,
			hoverBorderColor: '#f4781b',
            barPercentage: 1,
            barThickness: 14,
            maxBarThickness: 16,
            datalabels: {
                align: 'end',
                anchor: 'end'
            }
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    },
    plugins: [ChartDataLabels],
    options: {
        indexAxis: windowWidth <= 425 ? 'y' : 'x',
        maintainAspectRatio:false,
        responsive: true,
        plugins: {
            datalabels: {
                formatter: function(val, ctx){
                    return Math.round(val*1) + '%'
                }
            }
            
        }
    }
});
