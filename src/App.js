import React from 'react';
import {Cards,Chart,CountryPicker} from './component'
import styles from './App.module.css';
import {fetchData} from './Api';
 class App extends React.Component{
    state ={
        data:{perawatan:"",sembuh:"",meninggal:"",jumlahKasus:"",lastUpdate:"   "},
    };
    async componentDidMount(){
        const fetchedData =await fetchData();
        this.setState({data:fetchedData});
        
    }
    // handleCountryChange=async(country)=>{
    //     const fetchedData =await fetchData(country);
    //     this.setState({data:fetchedData,country:country})
        
    // }
     render(){
         const {data}=this.state
            
         if(this.state.data===""){
             return(
                 <div>Loading</div>
             )
         }
         else{
         return(
            <div>
            <Cards data={data}/>
            <Chart data={data} />
            </div>
         
            )}

    };
}
export default App;