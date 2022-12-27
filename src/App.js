import React, {useState, useEffect} from 'react';
import axios from 'axios';
import InfoCard from './components/Character';
import styled from 'styled-components';

const App = () => {
  const [starWarsData, setStarWarsData] = useState([])

  const StyledCharBox = styled.div`
  
  background-color: rgb(0, 0, 0, .7);
  width: 30%;
  margin: 0 auto;
  padding: 1%;
  border-radius: 1em;
  h3 {
    padding: 1%;
    padding-top: 4%;
    padding-bottom: 4%;
    color: white;
  }
  
  `

  useEffect(()=> {
    axios.get('https://swapi.dev/api/people/')
    .then(res => setStarWarsData(res.data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledCharBox>
          <InfoCard starWarsData={starWarsData} />
      </StyledCharBox>
    </div>
 );
}
export default App;
