import { useState } from "react";
import { useParams } from "react-router-dom";

function TourDetails(props)
{

    const {id}= useParams();
    
    const [view,setView]= useState(false);


return(
    <>
        {
            props.data.map((element)=>
            {
                if(element.id==id)
                return(
                    <div key={element.id}>
                    <h3>{element.name}</h3>
                    <img src={element.image} alt={element.name} />
                    <p>Pice: {element.price}</p>
                    <div>
                        {
                            view?
                            <>
                                <p>Description: {element.info}</p>
                                <button onClick={()=>setView(false)}>Show Less</button>
                            </>
                            :
                            <>
                                <p>Description: {(element.info).substring(0,200)}</p>
                                <button onClick={()=>setView(true)}>Show More</button>
                            </>
                        }
                    </div>
                    
                    </div>
                )
                
            }
            )
        }
    </>
)

}

export default TourDetails;