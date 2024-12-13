import React from 'react'
import { useParams } from 'react-router'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";



export const Trailer = ({movies}) => {
    const{id} = useParams()
    console.log(parseInt(id))
    return (
        <div className='LooL' style={{display:"flex",padding:"50px"}}>
<iframe src={`${movies.find(x => x.id === parseFloat(id)).trailer}`} style={{width:"50%" ,height:"580px" ,style:"border:1px solid black;"}}>
</iframe>
<div style={{display:"flex",flexDirection:"column",margin:'10px',justifyContent:"center",alignItems:"center"}}>     
    <p style={{color:"white",  textShadow: "0px 4px 4px #000000"}}>{movies.find(x => x.id === parseFloat(id)).description}</p>  
    <Link to="/">
    <Button variant="outline-warning" style={{textShadow: "0px 4px 4px #000000",height:"40px",width:"100px",}}>
                            Home
    </Button>
    </Link>
    </div>
</div>
    )
}

