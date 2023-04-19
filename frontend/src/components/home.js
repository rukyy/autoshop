// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Info from "./info";
import useFetch from "../hooks/useFetch";

const Home = () => {

    const [cars, ispending] = useFetch('https://autoshop.onrender.com')


    return ( 
        <div className="container">
            <div className="row">
                {ispending && 
                    <div className="socketbox">
                    <div className="socket">
                    <div className="gel center-gel">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c1 r1">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c2 r1">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c3 r1">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c4 r1">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c5 r1">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c6 r1">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>

                    <div className="gel c7 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>

                    <div className="gel c8 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c9 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c10 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c11 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c12 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c13 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c14 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c15 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c16 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c17 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c18 r2">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c19 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c20 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c21 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c22 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c23 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c24 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c25 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c26 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c28 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c29 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c30 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c31 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c32 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c33 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c34 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c35 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c36 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                    <div className="gel c37 r3">
                        <div className="hex-brick h1"></div>
                        <div className="hex-brick h2"></div>
                        <div className="hex-brick h3"></div>
                    </div>
                </div>
                </div>
                }
                {cars && <div className=" bootel">{cars&&cars.map((car)=>(
                    <div className=" col-12 col-md-4 col-lg-4 col-xl-4 card">
                        <div className="carpic" style={{backgroundImage:`url(photos/${car.picname}.jpg)`}}><button className="addtocart">Purchase</button> </div>
                        <a className="link" href={`/cars/${car._id}`}><p> <b>Brand</b>: {car.brand}<br /> <b>Name</b>: {car.model}<br /><b>Year</b>: {car.year}  <br /><b>Price</b>: {car.Price} <br /><b>Color</b>: {car.color}</p></a>
                    </div>  
                ))}</div>}
            </div>
            <Info/>
        </div>
     );
}
 
export default Home;