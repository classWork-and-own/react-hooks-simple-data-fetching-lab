import React, {useEffect,useState} from "react";
function App(){
    const[image, setimage]=useState([])
    useEffect(()=>{fetch="https://dog.ceo/api/breeds/image/random"
     .then((r)=>{r.json})
     .then((data)=>{data.image})},[])
    return(
        <div>
            <p>Loading...</p>
            <img src={image} alt="A Random Dog"/>

        </div>
    );
}

