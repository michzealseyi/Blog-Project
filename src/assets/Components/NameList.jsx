import { Link } from "react-router-dom"
export const NameList=(props)=>{
    return(
        <div>
            {props.names.map((name)=>(
                <div className="name-preview" key={name.id}>
                    <Link to={`/names/${name.id}`}>
                        <h2>{name.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}