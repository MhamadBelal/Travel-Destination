

function Tour(props)
{
return(
    <>
    
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name} />
            <p>Pice: {props.price}</p>


</>
);
}


export default Tour;
