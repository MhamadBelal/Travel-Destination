import { useState } from "react";
import { useParams } from "react-router-dom";

function TourDetails(props)
{

    const {id}= useParams();
    
    const [view,setView]= useState(false);


return(
    <>
        {
            props.data.filter((element)=> element.id==id).map(city=>{
                return(
                    <div key={city.id}>
                    <h3>{city.name}</h3>
                    <img src={city.image} alt={city.name} />
                    <p>Pice: {city.price}</p>
                    <div>
                        {
                            view?
                            <>
                                <p>Description: {city.info}</p>
                                <button onClick={()=>setView(false)}>Show Less</button>
                            </>
                            :
                            <>
                                <p>Description: {(city.info).substring(0,200)}</p>
                                <button onClick={()=>setView(true)}>Show More</button>
                            </>
                        }
                    </div>
                    </div>
                )
            })


        }
    </>
)

}

export default TourDetails;