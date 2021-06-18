import axios from 'axios';

const APPID = '25444db264263cac7822ab2a49a14413';
export const getWeatherInfoByCountry = (country) => 
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${APPID}&lang=vi&units=metric`);
