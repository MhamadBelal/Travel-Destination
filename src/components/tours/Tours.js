import './Tours.css';

function Tours(props)
{
return(
<>

{props.data.data.map((tours)=>{
    return(
        <div key={tours.id} className='sec'>
                        <h3>{tours.name}</h3>
                        <img src={tours.image} alt={tours.name}></img>
                        <p>Pice: {tours.price}</p>
                    </div>
    );
}
)
}
</>
);
}

export default Tours;