/*import {useEffect, useState} from "react"
export const NameList=(props)=>{
    return(
        <div>
            {props.names.map((name)=>(
                <div key={name.id}>{name.name}</div>
            ))}
        </div>
    )
}

//LOADING MESSAGE
function Home () {
    const [names,setNames]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        //THE SETTIMEOUT IS JUST EXPERIMENT SAKE
        setTimeout(()=>{
        fetch("http://localhost:3000/names")
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            setNames(data)
            setIsLoading(false)
        })
        },1000)
    },[])
    return(
        <div className="">
            {isLoading && <div>Loading....</div>}
            {names && <NameList names={names}/>} 
        </div>
    )
}
export default Home*/


import { NameList } from "./NameList"
import useFetch from "./CustomHook"

//FETCHING ERROR MESSAGE
function Home () {
    const {info:names, isLoading, error}=useFetch("http://localhost:3000/names")
    return(
        <div className="">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading....</div>}
            {names && <NameList names={names}/>} 
        </div>
    )
}
export default Home