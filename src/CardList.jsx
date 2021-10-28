import React from 'react';
import Card from './Card';

const CardList = ({test}) => {
 
return (
<div>
  {
    test.map((user, index) =>{
     return(
    
    <Card key={index} id={user.id} name={user.name} email={user.email}/>
    );

  })
  }
</div>
);
}

export default CardList;