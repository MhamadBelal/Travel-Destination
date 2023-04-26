

function Tour(props)
{
return(
    <>
    
        <div key={props.data.id} className='sec'>
            <h3>{props.data.name}</h3>
            <img src={props.data.image} alt={props.data.name}></img>
            <p>Pice: {props.data.price}</p>
        </div>

</>
);
}


export default Tour;
