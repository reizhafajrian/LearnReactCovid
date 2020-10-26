import React from 'react';
import {Cards,Chart,CountryPicker} from './component'
import styles from './App.module.css';
import {fetchData} from './Api';
 class App extends React.Component{
    state ={
        data:{confirmed:{value:""},recovered:{value:''},deaths:{value:''},lastUpdate:''},
        country:'' 
    };
    async componentDidMount(){
        const fetchedData =await fetchData();
        this.setState({data:fetchedData});
  
      
    }
    handleCountryChange=async(country)=>{
        const fetchedData =await fetchData(country);
        this.setState({data:fetchedData,country:country})
        
    }
     render(){
        const {data,country}=this.state
        if(this.state.data==="")
        {
            return <div>loading</div>
        }
        else{
         return(
            <div className={styles.container}>
               <Cards data={data} />
               <CountryPicker  handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
            </div>
        );
    }
}
 };
export default App;