
import { Chart } from "react-google-charts";
function Piechart3d() {
    return (

        <div className="body">
            <Chart
                width={'450px'}
                height={'400px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Cake', 'Order'],
                    ['Soup', 11],
                    ['Grilled', 2],
                    ['Vegetable', 2],
                    ['Sea', 2],
                    ['Fish', 7],
                ]}
                options={{
                    title: '',
                    // Just add this option
                    is3D: true,
                    legend: { position: 'bottom' },
                    chartArea: {width: '80%',right: 0,top:35}
                }}
                rootProps={{ 'data-testid': '2' }}
            />

        </div>

    );
}



export default Piechart3d;