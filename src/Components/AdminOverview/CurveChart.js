
import { Chart } from "react-google-charts";
function CurveChart() {
    return (

        <div className="body">
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Month','Money'],
                    [1, 1000],
                    [2, 1500],
                    [3, 2000],
                    [4, 1600],
                    [5, 1700],
                    [6, 1800],
                    [7, 2500],
                    [8, 1000],
                    [9, 3000],
                    [10, 3500],
                    [11, 2500],
                    [12, 2800]
                ]
            }
                options={{
                    hAxis: {
                        title: 'Month',
                    },
                    vAxis: {
                        title: 'Money',
                        maxValue: 10
                    },
                    legend: { position: 'top'},
                    chartArea: {width: '80%', right: 40,top:35}
                }}
                rootProps={{ 'data-testid': '1' }}
            />

        </div>

    );
}



export default CurveChart;