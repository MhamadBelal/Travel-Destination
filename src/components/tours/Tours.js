import './Tours.css';
import Tour from './tour/Tour';
import {Link} from 'react-router-dom';

function Tours(props)
{
return(
<>
{
    props.data.map((tour)=>{
        return(
            <div key={tour.id} className='sec'>
                <Link to={`/city/${tour.id}`}>
                    <Tour name={tour.name} image={tour.image} price={tour.price} />
                </Link>
            </div>
        )
    })
    
}

</>
);
}

export default Tours;