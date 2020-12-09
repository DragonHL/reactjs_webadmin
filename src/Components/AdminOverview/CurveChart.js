
import { Chart } from "react-google-charts";
import React, { useState } from 'react';
function CurveChart(props) {

    // console.log("props.arrayStart ==>", props.arrayStatistical)
    // console.log("props.arrayStatistical[0] ==>", (props.arrayStatistical[0]))




    const arrayStatisticalFollowMonth = props.arrayStatistical.map((dataS, index, array) => ({
        january: array[0],
        february: array[1],
        march: array[2],
        april: array[3],
        may: array[4],
        june: array[5],
        july: array[6],
        august: array[7],
        september: array[8],
        october: array[9],
        november: array[10],
        december: array[11]
    }))

    // console.log("arrayStatistical2 ==>", arrayStatisticalFollowMonth)
    // console.log("arrayStatisticalFollowMonth[0].january ==>", arrayStatisticalFollowMonth[0].january)
    // console.log("arrayStatisticalFollowMonth ==>", arrayStatisticalFollowMonth[0].december)
    // console.log("props.arrayStatistical ==>", props.arrayStatistical)
    // console.log("valueArrayStatistical0 ==>", arrayStatistical()[0][0])

    
    function arrayStatistical() {
        var arrayStatistical = [];
        arrayStatistical.push(props.arrayStatistical)
        return arrayStatistical
    }


    function statisticalMax() {
        var numberMax = arrayStatistical()[0][0];
        for (var item in arrayStatistical()[0]) {
            // console.log("item ==>", item + "==> " +arrayStatistical()[0][item])
            if (numberMax < arrayStatistical()[0][item]) {
                numberMax = arrayStatistical()[0][item];
            }
        }
        return numberMax;
    }

    // console.log("numberMax ==>", statisticalMax())


    return (
// arrayStatistical()[0][6]
        <>
            <Chart
                width={'100%'}
                height={'350px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}

                data={[
                    ['Month', 'Money'],
                    [1, arrayStatisticalFollowMonth[0].january],
                    [2, arrayStatisticalFollowMonth[0].february],
                    [3, arrayStatisticalFollowMonth[0].march],
                    [4, arrayStatisticalFollowMonth[0].april],
                    [5, arrayStatisticalFollowMonth[0].may],
                    [6, arrayStatisticalFollowMonth[0].june],
                    [7, arrayStatisticalFollowMonth[0].july],
                    [8, arrayStatisticalFollowMonth[0].august],
                    [9, arrayStatisticalFollowMonth[0].september],
                    [10, arrayStatisticalFollowMonth[0].october],
                    [11, arrayStatisticalFollowMonth[0].november],
                    [12, arrayStatisticalFollowMonth[0].december]
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
                    chartArea: { width: '80%', right: 50 }
                }}
                rootProps={{ 'data-testid': '1' }}
            />

        </>

    );
}



export default CurveChart;