import React from 'react';
//import Cardd from './Cardd.css'


const Card = (props) => {
    const {id, name, email} = props;
    return(

        <div className='fw3 tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
          <img className="h4.5 w5 " alt="robots" src={`https://robohash.org/${id}`}></img>
            <div>
             <h1>{name}</h1>
             <p>{email}</p>
            </div>

        </div>



    )
}

export default Card;