/*import {useState, useEffect} from "react"

const useFetch=(url)=>{
    const [info,setInfo]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error, setError]=useState(null)
    
    useEffect(()=>{
        //THE SETTIMEOUT IS JUST EXPERIMENT SAKE
        
        setTimeout(()=>{
            fetch(url)
            .then(response=>{
            if(!response.ok){
                throw Error("could not connect, please reload....")
            }
                return response.json()
            })
            .then(data=>{
                setInfo(data)
                setIsLoading(false)
                setError(null)//SO AS TO GET RID OF THE ERROR MSG WHEN THE SERVER IS BEING REACCESSED
            })
            .catch(err=>{
                setIsLoading(false)
                setError(err.message)//ERROR IN ACCESSING THE SERVER
            })
        },1000)
    },[url])
    return {info, isLoading, error}// THE DATAS WITHIN THE CURLY BRACES ARE OBJECTS WHICH CAN BE IN ANY FORM
}
export default useFetch*/


//CLEAN UP AND ABORT FUNCTION TO PREVENT ERROR MESSAGE
import {useState, useEffect} from "react"

const useFetch=(url)=>{
    const [info,setInfo]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error, setError]=useState(null)
    
    useEffect(()=>{
        const abortCont=new AbortController()//TO PREVENT AN ERROR MSG ON THE CONSOLE WHEN FETCHING IS UNMOUNTED
        setTimeout(()=>{
            fetch(url, {signal:abortCont.signal})
            .then(response=>{
            if(!response.ok){
                throw Error("could not connect, please reload....")
            }
                return response.json()
            })
            .then(data=>{
                setInfo(data)
                setIsLoading(false)
                setError(null)//SO AS TO GET RID OF THE ERROR MSG WHEN THE SERVER IS BEING REACCESSED
            })
            .catch(err=>{
                if (err.name==="AbortError"){// ERROR MSG RESOLVE 4 FETCH UNMOUNT
                    console.log("fetch aborted")
                }else{
                    setIsLoading(false)
                setError(err.message)
                }
            })
        },1000)
        return ()=> abortCont.abort()// ERROR MSG RESOLVE 4 FETCH UNMOUNT
    },[url])
    return {info, isLoading, error}// THE DATAS WITHIN THE CURLY BRACES ARE OBJECTS WHICH CAN BE IN ANY FORM
}
export default useFetch