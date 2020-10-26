import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData=async(country)=>{
    let changeable=url;
    if(country){
        changeable=`${url}/countries/${country}`
    }else{
        changeable=url
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeable);
        
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
};        
    }
    catch(error){};
}

export const fetchDailyData=async()=>{
    try{
        const {data}= await axios.get(`${url}/daily`)
        const modifydata=data.map((dailydata)=>({
            confirmed:dailydata.confirmed.total,
            deaths:dailydata.deaths.total,
            date:dailydata.reportDate
        }));

        return modifydata
    }
 
    catch(error){
        console.log(error)
    }
}

export const FetchCountries=async()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`)
        return (countries.map((country)=>country.name ))
    }
    catch(error){
        console.log(error)
    }
}