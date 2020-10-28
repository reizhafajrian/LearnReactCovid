import React,{useState,useEffect} from 'react';
import styles from './CountryPicker.module.css';
import {NativeSelect,FormControl} from '@material-ui/core';
import {FetchCountries} from '../../Api'
const CountryPicker=()=>{
    // const [fetchedCountries,setFethcedCountries] =useState([]);
    // useEffect(()=>{
    //     const FetchAPi=async()=>{
    //         setFethcedCountries(await FetchCountries())
    //     }
    //     FetchAPi()
        
    // },[setFethcedCountries])
    // console.log(fetchedCountries)
    // return(
    //     <FormControl className={styles.formControl}>
    //         <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}  >
    //             <option value='global'>global</option>
    // {fetchedCountries.map((country,i)=><option value={country} key={i}>{country}</option>)}
    //         </NativeSelect>
    //     </FormControl>
    // )
}
export default CountryPicker;