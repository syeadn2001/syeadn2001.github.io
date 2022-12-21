
hateCrimePerGroup = {
    'Catholic': 30,
    'Homosexual': 250,
    'Buddhist': 44,
    'Black': 161,
    'Transgender': 44,
    'Muslim': 50,
    'White': 67,
    'Female': 14,
    'Jewish': 798,
    'Asian': 263
}

let BarChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: Object.keys(hateCrimePerGroup),
        datasets: [
            {
                label: 'Number of Reported Crimes',
                data: Object.values(hateCrimePerGroup),
                backgroundColor: [
                    'rgb(255, 102, 102)',
                    'rgb(246, 215, 222)',
                    'rgb(172, 160, 217)',
                    'rgb(190, 210, 248)',
                    'rgb(244, 255, 102)',
                    'rgb(102, 255, 178)',
                    'rgb(102, 255, 255)',
                    'rgb(233, 225, 249)',
                    'rgb(178, 102, 255)',
                    'rgb(255, 2, 255)'
                ]
            }
        ]
    },
    options: {
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Reported Hate Crimes in NYC',
                font: {
                    size: 20,
                }
            },

        }
    }
});

let pieChart = new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
        labels: Object.keys(hateCrimePerGroup),
        datasets: [
            {
                label: Object.keys(hateCrimePerGroup),
                data: Object.values(hateCrimePerGroup),
                backgroundColor: [
                    'rgb(255, 102, 102)',
                    'rgb(246, 215, 222)',
                    'rgb(172, 160, 217)',
                    'rgb(190, 210, 248)',
                    'rgb(244, 255, 102)',
                    'rgb(102, 255, 178)',
                    'rgb(102, 255, 255)',
                    'rgb(233, 225, 249)',
                    'rgb(178, 102, 255)',
                    'rgb(255, 2, 255)'
                ]
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Reported Hate Crimes in NYC',
                font: {
                    size: 20,
                }
            },

        }
    }
});


