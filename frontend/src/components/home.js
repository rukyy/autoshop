// import { useEffect, useState } from "react";
import Info from "./info";
import useFetch from "../hooks/useFetch";

const Home = () => {

    const [cars] = useFetch('http://localhost:1000/')


    return ( 
        <div className="container">
            <div className="row">
                <div className=" bootel">{cars&&cars.map((car)=>(
                    <div className=" col-12 col-md-4 col-lg-4 col-xl-4 card">
                        <div className="carpic" style={{backgroundImage:`url(photos/${car.picname}.jpg)`}}><button className="addtocart">Purchase</button> </div>
                        <a className="link" href={`/cars/${car._id}`}><p> <b>Brand</b>: {car.brand}<br /> <b>Name</b>: {car.model}<br /><b>Year</b>: {car.year}  <br /><b>Price</b>: {car.Price} <br /><b>Color</b>: {car.color}</p></a>
                    </div>  
                ))}</div>
            </div>
            <Info/>
        </div>
     );
}
 
export default Home;