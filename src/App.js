import { useEffect, useState } from 'react';
import './App.css';
import { getWeatherInfoByCountry } from './components/Apis';
import MainContent from './components/MainContent/index';
import SubContent from './components/SubContent/index';

function App() {
  const [keySearch, setKeySearch] = useState('London');
  const [response, setResponse] = useState({});

  useEffect(() => {
    getWeatherInfoByCountry(keySearch)
    .then((res) => {
      setResponse(res.data)
    })
    .catch(error => {
      console.log(error.response.data)
      alert(error.response.data.message.toUpperCase());
    });
  }, [keySearch]);

  function HandleClickSearch(keySearch){
    console.log('hahaha', keySearch)
    setKeySearch(keySearch);

  }

  const handleOnChange = (e) => {
    if(e.key === 'Enter'){
      //console.log('click', e.target.value);
      setKeySearch(e.target.value);
    }
  };

  return (
    <div className='container'>
      <MainContent keySearch={HandleClickSearch} data={response} handleValue={handleOnChange}/>
      <SubContent data={response}/>
    </div>
  );
}

export default App;
