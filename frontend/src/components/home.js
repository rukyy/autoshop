// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Info from "./info";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () => {

    const [cars, ispending] = useFetch('https://autoshop.onrender.com')


    return ( 
        <div className="container">
            <div className="row">
                {cars && <div className=" bootel">{cars&&cars.map((car)=>(
                    <div className=" col-12 col-md-4 col-lg-4 col-xl-4 card">
                        <div className="carpic" style={{backgroundImage:`url(photos/${car.picname}.jpg)`}}><button className="addtocart">Purchase</button> </div>
                        <Link className="link" to={`/cars/${car._id}`}><p> <b>Brand</b>: {car.brand}<br /> <b>Name</b>: {car.model}<br /><b>Year</b>: {car.year}  <br /><b>Price</b>: {car.Price} <br /><b>Color</b>: {car.color}</p></Link>
                    </div>  
                ))}</div>}
            </div>
            <Info/>
        </div>
     );
}
 
export default Home;