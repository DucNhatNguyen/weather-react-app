import React, { useState } from 'react';




function MainContent({keySearch ,data , handleValue}) {
    const [value, setValue] = useState('');

    // icon, description
    const {weather, name, main} = data; // weather: infor of weather,  name: city name


    let iconPath = weather ? `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png` : '';
    let description = weather ? weather[0].description : '';
    let temp = weather ? Math.round(main.temp) : '';

    function handleValueChange(e){
        setValue(e.target.value);
    }

    return (
        <div className="main-section">
            <div className="search-bar">
                <i className="fas fa-search search-icon"></i>
                <input 
                    type="text" 
                    name="search-city" 
                    id="search-input" 
                    placeholder="Tìm kiếm thành phố..." 
                    value={ value }
                    onChange={handleValueChange}
                    onKeyPress={handleValue}
                    />
            </div>
            <div className="info-wrapper">
                <p className="city-name">{name}</p>
                <p className="weather-state">{description}</p>
                <img src= {iconPath} alt="weather icon" className="weather-icon" />
                <p className="temperature">{temp}</p>
            </div>
        </div>
    );
}

export default MainContent;