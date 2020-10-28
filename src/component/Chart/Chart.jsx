import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../Api'
import {Line,Bar} from 'react-chartjs-2'
import styles from './Chart.module.css';
const Chart=({data:{perawatan,sembuh,meninggal,jumlahKasus,lastUpdate}})=>{
    const [dailyData,setDailyData]=useState({})
    useEffect(()=>{
        const fetchApi=async()=>{
            setDailyData(await fetchDailyData());
        }
    fetchApi();
        console.log(fetchApi)
    },[dailyData.length]);

    const lineChart=(
        dailyData.length?(
           
        <Line data={{
            labels:dailyData.map(({provinsi})=>provinsi),
            datasets:[{
                data:dailyData.map(({kasuspositif})=>kasuspositif),
                label:'infected',
                borderColor:'#3333ff',
                fill:true,
            },{
                data:dailyData.map(({kasusmeninggal})=>kasusmeninggal),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true,

            }],
        }
        } />
    ):null
    )
    // const barChar=(
    //     confirmed?(
    //         <Bar 
    //             data={{
    //                 labels:['Infected','Recovered','Deaths'],
    //                 datasets:[{
    //                     label:'People',
    //                     backgroundColor:[
    //                         'rgba(0,0,255,0.5)',
    //                         'rgba(0,255,0 ,0.5)',
    //                         'rgba(255,0,255,0.5)',
    //                     ],
    //                     data:[confirmed.value,recovered.value,deaths.value]

    //                 }]

    //             }}
    //             options={{
    //                 legend:{display:false},
    //                 title:{display:true,text:`Current state in ${country}`}
    //             }}
    //         />
    //     ):null
    // )

    return(
        <div className={styles.container}>
            {/* {country?barChar:lineChart} */}
            {lineChart}
        </div>
    )
}
export default Chart;