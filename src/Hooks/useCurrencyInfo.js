import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [ data, SetData] = useState({})

    useEffect(()=>{
        fetch(`url`)
        .then((res)=> res.json())             //convert API data which is in string from to json form
        .then((res)=> SetData(res[currency]))                //take response the put in setData 
    }, [currency])                             // dependency in currency
    return data
}  

export default useCurrencyInfo;