import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [cars, setcars]= useState('')
    const [ispending, setispending] = useState(true)
    useEffect(()=>{
        const fetchdata=async()=>{
            const response= await fetch(url)
            const data = await response.json()

            if(data){
                setcars(data)
                setispending(false)
            }
        }
        fetchdata()
    },[url])
    return [cars, ispending];
}
 
export default useFetch;
