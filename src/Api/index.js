import axios from 'axios';

const url='https://indonesia-covid-19.mathdro.id/api';

export const fetchData=async()=>{
    try{
        const {data:{perawatan,sembuh,meninggal,jumlahKasus,lastUpdate}}=await axios.get(`${url}`);
        
        return {
           perawatan,sembuh,meninggal,jumlahKasus,lastUpdate
        };
             
    }

    catch(error){
        console.log(error);
    };
    
}

export const fetchDailyData=async()=>{
    try{
        let {data}= await axios.get(`${url}/provinsi`);
        data.data.pop();

        const modifydata=data.data.map((hasildata)=>({
            kasuspositif:hasildata.kasusPosi,
            kasusmeninggal:hasildata.kasusMeni,
            provinsi:hasildata.provinsi
        }));
        return modifydata
    }
 
    catch(error){
        console.log(error)
    }
}


// export const FetchCountries=async()=>{
//     try{
//         const {data:{countries}}=await axios.get(`${url}/countries`)
//         return (countries.map((country)=>country.name ))
//     }
//     catch(error){
//         console.log(error)
//     }
// }