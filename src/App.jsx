import React from 'react';
import CardList from './CardList';
import { robots } from './Robots.js';
import SearchBox from './SearchBox';
import { useState } from 'react';

const App = () => {

  const [search, setSearch] = useState("")
  const [test, setTest] = useState(robots)

  
  const searching = (event) => {
    setSearch(event);
    if (!event) {

      return setTest(robots)

    } else{

      const filteredrobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(search.toLowerCase())
      })
      //console.log(filteredrobot)
       setTest(filteredrobot)


    }

  }
  return (
    <div className="tc">
      <h1>RobotFriends</h1>
      <SearchBox searching={searching} />
      <CardList robots={robots} test={test} />
    </div>

  );

}

export default App;