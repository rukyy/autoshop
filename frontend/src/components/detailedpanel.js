import { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Detailedpannel = () => {
    const {id} = useParams()
    const [car, setcar]=useState('')
    // const [cars]= useFetch('http://localhost:1000/')

    useEffect(()=>{
        const fetchcar = async ()=>{
            const response =await fetch(`http://localhost:1000/${id}`)
            const data = await response.json()
            if(data){
                setcar(data)
            }
        }
        fetchcar()
        console.log(car.picname)
    },[])
    return ( 
        <div className="detailed">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={`/photos/${car.picname}.jpg`} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={`/photos/${car.picname}.jpg`} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={`/photos/${car.picname}.jpg`} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="review">
                <p><b>Brand</b>: {car.brand}<br /> <b>Name</b>: {car.model}<br /><b>Year</b>: {car.year}  <br /><b>Price</b>: {car.Price} <br /><b>Color</b>: {car.color}</p>
            </div>
        </div>
     );
}
 
export default Detailedpannel;