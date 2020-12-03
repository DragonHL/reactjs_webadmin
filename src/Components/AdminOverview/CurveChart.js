
import { Chart } from "react-google-charts";
import React, { useState } from 'react';
function CurveChart(props) {

    console.log("props.arrayStart ==>", props.arrayStatistical)
    console.log("props.arrayStatistical[0] ==>", (props.arrayStatistical[0]))



    function arrayStatistical(){
        var arrayStatistical = [];
        arrayStatistical.push(props.arrayStatistical)
        return arrayStatistical
    }
    

    console.log("valueArrayStatistical0 ==>", arrayStatistical()[0][0])


    // function statisticalMax() {
    //     var numberMax = props.arrayStatistical[0];
    //     for (var item in props.arrayStatistical) {
    //         console.log("item ==>", item)
    //         if (numberMax < props.arrayStatistical[item]) {
    //             numberMax = props.arrayStatistical[item];
    //         }
    //     }
    //     return numberMax;
    // }
    function statisticalMax() {
        var numberMax = arrayStatistical()[0][0];
        for (var item in arrayStatistical()[0]) {
            console.log("item ==>", item + "==> " +arrayStatistical()[0][item])
            if (numberMax < arrayStatistical()[0][item]) {
                numberMax = arrayStatistical()[0][item];
            }
        }
        return numberMax;
    }

    console.log("numberMax ==>", statisticalMax())

    return (

        <div className="body">
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}

                data={[
                    ['Month', 'Money'],
                    [1, arrayStatistical()[0][0]],
                    [2, arrayStatistical()[0][1]],
                    [3, arrayStatistical()[0][2]],
                    [4, arrayStatistical()[0][3]],
                    [5, arrayStatistical()[0][4]],
                    [6, arrayStatistical()[0][5]],
                    [7, arrayStatistical()[0][6]],
                    [8, arrayStatistical()[0][7]],
                    [9, arrayStatistical()[0][8]],
                    [10, arrayStatistical()[0][9]],
                    [11, arrayStatistical()[0][10]],
                    [12, arrayStatistical()[0][11]]
                ]
                }
                options={{
                    hAxis: {
                        title: 'Month',
                    },
                    vAxis: {
                        title: 'Money',
                        maxValue: statisticalMax()
                    },
                    legend: { position: 'top' },
                    chartArea: { width: '80%', right: 40, top: 35 }
                }}
                rootProps={{ 'data-testid': '1' }}
            />

        </div>

    );
}



export default CurveChart;