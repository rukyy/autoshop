import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [cars, setcars]= useState('')
    useEffect(()=>{
        const fetchdata=async()=>{
            const response= await fetch(url)
            const data = await response.json()

            if(data){
                setcars(data)
            }
        }
        fetchdata()
    })
    return [cars];
}
 
export default useFetch;
