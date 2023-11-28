'use client'
import { useEffect, useState } from "react";
import axios from "axios";



export const useFetch =()=>{
    const [resData,setData]=useState([]);
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect (()=>{
        const fetchData = async()=>{
            try{ 
                setLoading(true);
                const res = await   axios.post(
                    'https://www.ishtari.com/motor/v2/index.php?route=common/widgets', 
                    {
                     view:"web_desktop",
                     limit:10,
                     page:1
                    },
                     {
                       
                         headers: { 
                             'Authorization': 'Bearer 9a1cf5051b5a8ee2b5e4538264ed94724c7d5980',
                             'Content-Type' : 'application/json' 
                         }
                     }
                 );
                 setLoading(false);
                setData(res.data.data.widgets);

            }catch(error){
                setError(error)
                setLoading(false)
                console.log("________________________________________")
                console.log(error)
            }
            setLoading(false)
            
        }
        fetchData()
    },[])
  
    return{resData ,isLoading,error};
}